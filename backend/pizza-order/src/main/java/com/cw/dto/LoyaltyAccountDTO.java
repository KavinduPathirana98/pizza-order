package com.cw.dto;

import com.cw.entity.User;



public class LoyaltyAccountDTO {

    private int id;
    private User user;
    private Integer points;
    
    
    
	public LoyaltyAccountDTO() {
		super();
	}
	public LoyaltyAccountDTO(User user, Integer points) {
		super();
		this.user = user;
		this.points = points;
	}
	public LoyaltyAccountDTO(int id, User user, Integer points) {
		super();
		this.id = id;
		this.user = user;
		this.points = points;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Integer getPoints() {
		return points;
	}
	public void setPoints(Integer points) {
		this.points = points;
	}
    
    
}
