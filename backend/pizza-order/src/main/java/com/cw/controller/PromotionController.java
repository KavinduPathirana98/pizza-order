package com.cw.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cw.dto.PromotionDTO;
import com.cw.dto.ResponseDTO;
import com.cw.service_interface.IPromotionService;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/api/promotion")
public class PromotionController {
	
	
	@Autowired
	private IPromotionService _service;
	@PostMapping("/add")
	public ResponseDTO addPromotion(@RequestBody PromotionDTO promotionDTO,@RequestParam int paymentMethod,@RequestParam double amount) {

		try {
			PromotionDTO response = _service.addPromotion(promotionDTO);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	@PostMapping("/update")
	public ResponseDTO updatePromotion(@RequestBody PromotionDTO promotionDTO) {

		try {
			PromotionDTO response = _service.updatePromotion(promotionDTO);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	@DeleteMapping
	public ResponseDTO deletePromotion(@RequestParam int id) {

		try {
			PromotionDTO response = _service.deletePromotion(id);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	@GetMapping
	public ResponseDTO viewPromotion() {

		try {
		List<PromotionDTO >response = _service.viewPromotion();
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}

}
