package com.cw.dto;

public class UserDTO {

	
	private int id;
	private String email;
	private String fName;
	private String lName;
	private String password;
	private int type;
	
	public UserDTO()
	{
		super();
	}
	
	public UserDTO(String email, String fName, String lName, String password, int type) {
		super();
		this.email = email;
		this.fName = fName;
		this.lName = lName;
		this.password = password;
		this.type = type;
	}
	
	public UserDTO(int id, String email, String fName, String lName, String password, int type) {
		super();
		this.id = id;
		this.email = email;
		this.fName = fName;
		this.lName = lName;
		this.password = password;
		this.type = type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	
	
}
