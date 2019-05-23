package br.com.hbsis.entities;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TemperatureItem {

	private Date dt;
	private Temperature main;
	
	
}
