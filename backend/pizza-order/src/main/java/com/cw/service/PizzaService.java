package com.cw.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cw.dto.PizzaDTO;
import com.cw.entity.Pizza;
import com.cw.repository.PizzaRepository;

@Service
public class PizzaService {

	@Autowired
	private PizzaRepository _repo;

	public PizzaDTO addPizza(PizzaDTO pizzaDTO) {
		try {
			Pizza pizza = new Pizza();
			BeanUtils.copyProperties(pizzaDTO, pizza, "id");
			Pizza response = _repo.save(pizza);
			PizzaDTO returnObect = new PizzaDTO();
			BeanUtils.copyProperties(response, returnObect);
			return returnObect;
		} catch (Exception ex) {
			throw ex;
		}

	}

	public PizzaDTO updatePizza(PizzaDTO pizzaDTO) {
		try {
			Pizza pizza = new Pizza();
			BeanUtils.copyProperties(pizzaDTO, pizza);
			Pizza response = _repo.save(_repo.findById(pizzaDTO.getId()).get());
			PizzaDTO returnObect = new PizzaDTO();
			BeanUtils.copyProperties(response, returnObect);
			return returnObect;
		} catch (Exception ex) {
			throw ex;
		}

	}

	public List<PizzaDTO> getUserPizza(int userId) {
		try {
			List<PizzaDTO> response = new ArrayList<>();
			List<Pizza> data = new ArrayList<>();
			data = _repo.findPizzaByUserId(userId);
			BeanUtils.copyProperties(data, response);
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}
}
