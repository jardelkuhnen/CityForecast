package br.com.hbsis.dtos;

import java.io.Serializable;
import java.util.List;

import br.com.hbsis.entities.City;
import br.com.hbsis.entities.TemperatureItem;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CityForecastDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private City city;
	private List<TemperatureItem> itensTemperature;
	
}
