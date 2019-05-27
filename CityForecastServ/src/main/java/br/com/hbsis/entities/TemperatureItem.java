package br.com.hbsis.entities;

import java.io.Serializable;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TemperatureItem implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long dt;
	private Date date;
	private Temperature main;
	
	
}
