package com.cw.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Pizza {

	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	    private String name;
	    private String crust;
	    private String sauce;
	    private String toppings;
	    private String cheese;
	    private String size;
	    private double price;
	    private boolean favourite;
	    
	    @OneToMany
	    @JoinColumn(name = "userId")
	    private User user;

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

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}
	   
	  
	  
	    
	    
}
