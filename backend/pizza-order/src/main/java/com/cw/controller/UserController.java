package com.cw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cw.dto.ResponseDTO;
import com.cw.dto.UserDTO;
import com.cw.service_interface.IUserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class UserController {
	@Autowired
	private IUserService _service;

	
	@PostMapping("/login")
	public ResponseDTO loginUser(@RequestBody UserDTO userDTO) {

		try {
			UserDTO response = _service.loginUser(userDTO);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}
	@PostMapping("/save")
	public ResponseDTO saveUser(@RequestBody UserDTO userDTO) {

		try {
			UserDTO response = _service.addUser(userDTO);
			return new ResponseDTO(1, "Success", response);
		} catch (Exception ex) {
			return new ResponseDTO(0, ex.getMessage().toString(), null);
		}

	}

}
