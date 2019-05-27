package br.com.hbsis.services;

import java.time.Instant;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.hbsis.dtos.CityForecastDTO;
import br.com.hbsis.dtos.CityWeatherDTO;
import br.com.hbsis.entities.City;
import br.com.hbsis.entities.TemperatureItem;
import br.com.hbsis.repositories.CityRepository;

@Service
public class CityService {

	@Autowired
	private CityRepository cityRepository;

	@Value("${app.openweather.url.weather}")
	private String openWeatherURLWeather;

	@Value("${app.openweather.url.forecast}")
	private String openWeatherURLForecast;

	@Value("${app.openweather.apikey}")
	private String openWeatherApiKey;

	public City loadByName(String name) {
		return cityRepository.findByName(name);
	}


	private UriComponentsBuilder loadUriComponentsBuilder(String name, String apiUrl) {
		UriComponentsBuilder uriComponentsBuilder = UriComponentsBuilder.fromHttpUrl(apiUrl);
		uriComponentsBuilder.queryParam("apikey", openWeatherApiKey);
		uriComponentsBuilder.queryParam("q", name);
		return uriComponentsBuilder;
	}

	public City save(CityWeatherDTO cityWeatherDTO) {

		City city = new City();

		city.setId(cityWeatherDTO.getId());
		city.setName(cityWeatherDTO.getName());

		return cityRepository.save(city);
	}

	public CityWeatherDTO findWeather(String name) {

		UriComponentsBuilder uriComponentsBuilder = loadUriComponentsBuilder(name, openWeatherURLWeather);

		RestTemplate restTemplate = new RestTemplate();
		CityWeatherDTO cityWeatherDTO = restTemplate.getForObject(uriComponentsBuilder.build().toUri(),
				CityWeatherDTO.class);

		return cityWeatherDTO;
	}
	
	public CityForecastDTO findForecast(String name) {

		UriComponentsBuilder uriComponentsBuilder = loadUriComponentsBuilder(name, openWeatherURLForecast);
		RestTemplate restTemplate = new RestTemplate();

		CityForecastDTO forecastDTO = restTemplate.getForObject(uriComponentsBuilder.build().toUri(), CityForecastDTO.class); 

		convertUnixToDate(forecastDTO.getList());
		
		return forecastDTO;
	}

	private void convertUnixToDate(List<TemperatureItem> list) {
		for (TemperatureItem item : list) {
			Date date = Date.from(Instant.ofEpochSecond(item.getDt()));
			item.setDate(date);
		}
	}


	public List<City> loadAll() {
		return cityRepository.findAll();
	}

	public void delete(Long id) {

		City city = cityRepository.findById(id).get();
		
		if(city != null) {
			cityRepository.delete(city);
		}
	}
}
