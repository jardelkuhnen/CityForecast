package br.com.hbsis.controllers;

import br.com.hbsis.dtos.CityForecastDTO;
import br.com.hbsis.dtos.CityWeatherDTO;
import br.com.hbsis.entities.City;
import br.com.hbsis.services.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;

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

        if (city == null) {
            return null;
        }

        return ResponseEntity.ok().body(city);
    }

    @PostMapping("/city/save/{name}")
    public ResponseEntity<?> save(@PathVariable(value = "name") String name) {

        if (cityService.loadByName(name) != null)
            return null;

        CityWeatherDTO cityWeatherDTO = null;
        try {
            cityWeatherDTO = cityService.findWeather(name);
        } catch (HttpClientErrorException e) {
            return ResponseEntity.badRequest().body("Cidade não localizada");
        }

        City city = cityService.save(cityWeatherDTO);

        return ResponseEntity.ok(city);
    }


    @GetMapping("/city/forecast/{name}")
    public CityForecastDTO findForecast(@PathVariable(value = "name") String name) {
        return cityService.findForecast(name);
    }

}
