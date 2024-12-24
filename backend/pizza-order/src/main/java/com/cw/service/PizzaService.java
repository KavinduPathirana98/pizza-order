package com.cw.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cw.dto.PizzaDTO;
import com.cw.entity.Pizza;
import com.cw.repository.PizzaRepository;
import com.cw.service_interface.IPizzaService;

@Service
public class PizzaService implements IPizzaService {

	@Autowired
	private PizzaRepository _repo;

	@Override
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
	
	@Override
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
	@Override
	public PizzaDTO updatePizza(int id,boolean isFav)
	{
		try {
			Pizza pizza = new Pizza();
			
			int response = _repo.updatePizzaFavourite(id,isFav);
			PizzaDTO returnObect = new PizzaDTO();
			BeanUtils.copyProperties(response, returnObect);
			return returnObect;
		} catch (Exception ex) {
			throw ex;
		}
	}
	@Override
	
	public List<PizzaDTO> getUserPizza(int userId) {
	    try {
	        List<PizzaDTO> response = new ArrayList<>();
	        List<Pizza> data = _repo.findPizzaByUserId(userId); // Pass the userId to the repository method
	        for (int i = 0; i < data.size(); i++) {  // Change the condition to i < data.size()
	            PizzaDTO pizzaDTO = new PizzaDTO();
	            pizzaDTO.setId(data.get(i).getId());
	            pizzaDTO.setName(data.get(i).getName());
	            pizzaDTO.setCrust(data.get(i).getCrust());
	            pizzaDTO.setSauce(data.get(i).getSauce());
	            pizzaDTO.setToppings(data.get(i).getToppings());
	            pizzaDTO.setCheese(data.get(i).getCheese());
	            pizzaDTO.setSize(data.get(i).getSize());
	            pizzaDTO.setPrice(data.get(i).getPrice());
	            pizzaDTO.setFavourite(data.get(i).isFavourite());
	          //  pizzaDTO.setUser(data.get(i).getUser()); // Copy the User object
	            
	            response.add(pizzaDTO);
	        }
	        
	        return response;
	    } catch (Exception ex) {
	        throw ex;
	    }
	}

}
