package br.com.hbsis.dtos;

import java.io.Serializable;

import br.com.hbsis.entities.Temperature;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CityWeatherDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Temperature main;
	
}
