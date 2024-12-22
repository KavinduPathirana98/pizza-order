package com.cw.dto;

public class PromotionDTO {

	private int id;
	private String type;
	private double discountPrice;
	
	
	public PromotionDTO()
	{
		
	}
	
	public PromotionDTO(String type, double discountPrice) {
		super();
		this.type = type;
		this.discountPrice = discountPrice;
	}
	
	public PromotionDTO(int id, String type, double discountPrice) {
		super();
		this.id = id;
		this.type = type;
		this.discountPrice = discountPrice;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public double getDiscountPrice() {
		return discountPrice;
	}
	public void setDiscountPrice(double discountPrice) {
		this.discountPrice = discountPrice;
	}
	
	
}
