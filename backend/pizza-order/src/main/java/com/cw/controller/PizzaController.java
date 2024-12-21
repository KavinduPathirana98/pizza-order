package com.cw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cw.dto.PizzaDTO;
import com.cw.dto.ResponseDTO;
import com.cw.service_interface.IPizzaService;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/api/pizza")
public class PizzaController {
	
	@Autowired
	private IPizzaService _service;

	
	@PostMapping
	public ResponseDTO addPizza(@RequestBody PizzaDTO pizzaDTO) {

		try {
			PizzaDTO response = _service.addPizza(pizzaDTO);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	@PostMapping
	public ResponseDTO updatePizza(@RequestBody PizzaDTO pizzaDTO) {

		try {
			PizzaDTO response = _service.updatePizza(pizzaDTO);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	
	@PostMapping
	public ResponseDTO getUserPizza(@RequestBody int userID) {

		try {
			List<PizzaDTO> response = _service.getUserPizza(userID);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}

}
