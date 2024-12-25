package com.cw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cw.dto.OrderDTO;
import com.cw.dto.ResponseDTO;
import com.cw.service_interface.IOrderService;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/api/order")
public class OrderController {

	@Autowired
	private IOrderService _service;
	@PostMapping("/add/{paymentMethod}/{amount}")
	public ResponseDTO addOrder(@RequestBody OrderDTO orderDTO,@PathVariable int paymentMethod,@PathVariable double amount) {

		try {
			OrderDTO response = _service.addOrder(orderDTO,paymentMethod,amount);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	@PostMapping("/update")
	public ResponseDTO updateOrder(@RequestBody OrderDTO orderDTO) {

		try {
			OrderDTO response = _service.updateOrder(orderDTO);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	
	@GetMapping("/viewMyOrders/{pizzaIds}")
	public ResponseDTO viewMyOrders(@PathVariable  String pizzaIds) {

		try {
			List<OrderDTO> response = _service.viewMyOrders(pizzaIds);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
}
