package com.cw.service_interface;

import com.cw.dto.UserDTO;

public interface IUserService {
	
	UserDTO loginUser(UserDTO userDTO);
	UserDTO addUser(UserDTO userDTO);
	
}
