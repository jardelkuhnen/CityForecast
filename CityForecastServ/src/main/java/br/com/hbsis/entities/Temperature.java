package br.com.hbsis.entities;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Temperature implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long temp;
	private Long temp_min;
	private Long temp_max;
	
}
