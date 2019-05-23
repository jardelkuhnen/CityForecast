package br.com.hbsis.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hbsis.entities.City;

public interface CityRepository extends JpaRepository<City, Long>{

	City findByName(String name);
	
}
