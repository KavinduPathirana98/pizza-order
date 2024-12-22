package com.cw.dto;

import com.cw.entity.Order;



public class FeedBackDTO {

	
	private int id;
	private String description;
	private int ratings;
    private Order order;
    
    public FeedBackDTO()
    {
    	
    }
    
	public FeedBackDTO(int id, String description, int ratings, Order order) {
		super();
		this.id = id;
		this.description = description;
		this.ratings = ratings;
		this.order = order;
	}
	
	public FeedBackDTO(String description, int ratings, Order order) {
		super();
		this.description = description;
		this.ratings = ratings;
		this.order = order;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getRatings() {
		return ratings;
	}
	public void setRatings(int ratings) {
		this.ratings = ratings;
	}
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
    
    

}
