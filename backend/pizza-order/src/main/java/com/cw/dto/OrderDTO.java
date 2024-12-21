package com.cw.dto;

import com.cw.entity.Pizza;



public class OrderDTO {

	private int id;
	private String address;
	private int type;  //0 as pickup,1 as delivery
	private int status; //0 as place, 1 as preparing,2 out for delivery,3 delivered
	private String tp;
    private Pizza pizza;
    
    public OrderDTO()
    {
    	
    }
    
    
	public OrderDTO(int id, String address, int type, int status, String tp, Pizza pizza) {
		super();
		this.id = id;
		this.address = address;
		this.type = type;
		this.status = status;
		this.tp = tp;
		this.pizza = pizza;
	}


	public OrderDTO(String address, int type, int status, String tp, Pizza pizza) {
		super();
		this.address = address;
		this.type = type;
		this.status = status;
		this.tp = tp;
		this.pizza = pizza;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getTp() {
		return tp;
	}
	public void setTp(String tp) {
		this.tp = tp;
	}
	public Pizza getPizza() {
		return pizza;
	}
	public void setPizza(Pizza pizza) {
		this.pizza = pizza;
	}
    
    

}
