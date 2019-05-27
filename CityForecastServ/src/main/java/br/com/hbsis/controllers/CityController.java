package br.com.hbsis.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hbsis.dtos.CityForecastDTO;
import br.com.hbsis.dtos.CityWeatherDTO;
import br.com.hbsis.entities.City;
import br.com.hbsis.services.CityService;

@RestController
@RequestMapping("/api/")
public class CityController {

	@Autowired
	private CityService cityService;

	@GetMapping("/city")
	public ResponseEntity<List<City>> findAll() {

		List<City> allCities = cityService.loadAll();

		return ResponseEntity.ok(allCities);
	}

	@GetMapping("/city/{name}")
	public ResponseEntity<City> findByName(@PathVariable(value = "name") String name) {

		City city = cityService.loadByName(name);

		if (city != null) {
			return null;
		}

		return ResponseEntity.ok().body(city);
	}

	@PostMapping("/city/save/{name}")
	public ResponseEntity<City> save(@PathVariable(value = "name") String name) {

		if (cityService.loadByName(name) != null)
			return null;

		CityWeatherDTO cityWeatherDTO = cityService.findWeather(name);

		if (cityWeatherDTO == null)
			return null;

		City city = cityService.save(cityWeatherDTO);

		return ResponseEntity.ok(city);
	}

	
	@GetMapping("/city/forecast/{name}")
	public ResponseEntity<CityForecastDTO> findForecast(@PathVariable(value = "name") String name) {

		CityForecastDTO cityForecastDTO = cityService.findForecast(name);

		return ResponseEntity.ok(cityForecastDTO);
	}

}
