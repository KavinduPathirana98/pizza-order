package com.cw.dto;

public class PizzaDTO {

	
	   private int id;

	    private String name;
	    private String crust;
	    private String sauce;
	    private String toppings;
	    private String cheese;
	    private String size;
	    private double price;
	    private boolean favourite;
	    
	    public PizzaDTO()
	    {
	    	
	    }
	    
	    public PizzaDTO(int id, String name, String crust, String sauce, String toppings, String cheese, String size,
				double price, boolean favourite) {
			super();
			this.id=id;
			this.name = name;
			this.crust = crust;
			this.sauce = sauce;
			this.toppings = toppings;
			this.cheese = cheese;
			this.size = size;
			this.price = price;
			this.favourite = favourite;
		}
	    
		public PizzaDTO( String name, String crust, String sauce, String toppings, String cheese, String size,
				double price, boolean favourite) {
			super();
			
			this.name = name;
			this.crust = crust;
			this.sauce = sauce;
			this.toppings = toppings;
			this.cheese = cheese;
			this.size = size;
			this.price = price;
			this.favourite = favourite;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getCrust() {
			return crust;
		}
		public void setCrust(String crust) {
			this.crust = crust;
		}
		public String getSauce() {
			return sauce;
		}
		public void setSauce(String sauce) {
			this.sauce = sauce;
		}
		public String getToppings() {
			return toppings;
		}
		public void setToppings(String toppings) {
			this.toppings = toppings;
		}
		public String getCheese() {
			return cheese;
		}
		public void setCheese(String cheese) {
			this.cheese = cheese;
		}
		public String getSize() {
			return size;
		}
		public void setSize(String size) {
			this.size = size;
		}
		public double getPrice() {
			return price;
		}
		public void setPrice(double price) {
			this.price = price;
		}
		public boolean isFavourite() {
			return favourite;
		}
		public void setFavourite(boolean favourite) {
			this.favourite = favourite;
		}
	    
	    
}
