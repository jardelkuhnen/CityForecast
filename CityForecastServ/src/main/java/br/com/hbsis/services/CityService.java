package br.com.hbsis.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.hbsis.dtos.CityForecastDTO;
import br.com.hbsis.dtos.CityWeatherDTO;
import br.com.hbsis.entities.City;
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

	public CityWeatherDTO findWeather(String name) {

		UriComponentsBuilder uriComponentsBuilder = loadUriComponentsBuilder(name);

		RestTemplate restTemplate = new RestTemplate();
		CityWeatherDTO cityWeatherDTO = restTemplate.getForObject(uriComponentsBuilder.build().toUri(),
				CityWeatherDTO.class);

		return cityWeatherDTO;
	}

	private UriComponentsBuilder loadUriComponentsBuilder(String name) {
		UriComponentsBuilder uriComponentsBuilder = UriComponentsBuilder.fromHttpUrl(openWeatherURLWeather);
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

	public CityForecastDTO findForecast(String name) {

		UriComponentsBuilder uriComponentsBuilder = loadUriComponentsBuilder(name);
		RestTemplate restTemplate = new RestTemplate();

		CityForecastDTO forecastDTO = restTemplate.getForObject(uriComponentsBuilder.build().toUri(), CityForecastDTO.class); 
		
		return forecastDTO;

	}

	public List<City> loadAll() {
		return cityRepository.findAll();
	}

}
