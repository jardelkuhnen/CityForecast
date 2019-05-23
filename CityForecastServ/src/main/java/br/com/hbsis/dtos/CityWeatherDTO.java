package br.com.hbsis.dtos;

import br.com.hbsis.entities.Temperature;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CityWeatherDTO {


	private Long id;
	private String name;
	private Temperature temperature;
	
}
