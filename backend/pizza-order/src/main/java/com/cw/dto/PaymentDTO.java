package com.cw.dto;

import com.cw.entity.Order;

public class PaymentDTO {

	    private int id;
	    private Order order;
	    private int paymentMethod; // "0-CreditCard", "1-DigitalWallet"
	    private double amount;
	    
	    
	    public PaymentDTO()
	    {
	    	
	    }
	    
		public PaymentDTO(Order order, int paymentMethod, double amount) {
			super();
			this.order = order;
			this.paymentMethod = paymentMethod;
			this.amount = amount;
		}
		public PaymentDTO(int id, Order order, int paymentMethod, double amount) {
			super();
			this.id = id;
			this.order = order;
			this.paymentMethod = paymentMethod;
			this.amount = amount;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public Order getOrder() {
			return order;
		}
		public void setOrder(Order order) {
			this.order = order;
		}
		public int getPaymentMethod() {
			return paymentMethod;
		}
		public void setPaymentMethod(int paymentMethod) {
			this.paymentMethod = paymentMethod;
		}
		public double getAmount() {
			return amount;
		}
		public void setAmount(double amount) {
			this.amount = amount;
		}
	    
	    
}
