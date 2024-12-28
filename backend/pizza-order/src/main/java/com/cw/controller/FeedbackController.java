package com.cw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cw.dto.FeedBackDTO;
import com.cw.dto.ResponseDTO;
import com.cw.service_interface.IFeedBackService;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/api/feedback")
public class FeedbackController {

	
	@Autowired
	private IFeedBackService _service;
	
	@PostMapping("/add")
	public ResponseDTO addFeedBack(@RequestBody FeedBackDTO feedBackDTO) {

		try {
			
			FeedBackDTO response = _service.addFeedBack(feedBackDTO);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	
	//Admin Function to get all feebacks
	@GetMapping
	public ResponseDTO viewFeedBack() {

		try {
			
			List<FeedBackDTO> response = _service.viewFeedBack();
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
}
