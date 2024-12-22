package com.cw.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cw.dto.UserDTO;
import com.cw.entity.User;
import com.cw.repository.UserRepository;
import com.cw.service_interface.IUserService;

@Service
public class UserService implements IUserService {

	@Autowired
	private UserRepository _repo;

	@Override
	// Create User
	public UserDTO addUser(UserDTO userDTO) {
		try {
			User user = new User();
			BeanUtils.copyProperties(userDTO, user, "id");
			User response = _repo.save(user);
			UserDTO returnObect = new UserDTO();
			BeanUtils.copyProperties(response, returnObect);
			return returnObect;
		} catch (Exception ex) {
			throw ex;
		}

	}

	@Override
	// Login User
	public UserDTO loginUser(UserDTO userDTO) {
		try {
			User user = new User();
			BeanUtils.copyProperties(userDTO, user, "id");
			User response = _repo.findByEmailAndPassword(userDTO.getEmail(), userDTO.getPassword());
			UserDTO returnObect = new UserDTO();
			BeanUtils.copyProperties(response, returnObect);
			return returnObect;
		} catch (Exception ex) {
			throw ex;
		}

	}
};