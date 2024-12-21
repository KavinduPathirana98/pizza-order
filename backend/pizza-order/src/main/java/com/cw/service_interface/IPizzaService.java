package com.cw.service_interface;

import java.util.List;

import com.cw.dto.PizzaDTO;


public interface IPizzaService {
	
	PizzaDTO addPizza(PizzaDTO pizzaDTO);
	PizzaDTO updatePizza(PizzaDTO pizzaDTO);
	List<PizzaDTO> getUserPizza(int userId);
}
