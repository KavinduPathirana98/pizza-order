package com.cw.service_interface;

import java.util.List;

import com.cw.dto.OrderDTO;



public interface IOrderService {
	
	OrderDTO addOrder(OrderDTO orderDTO, int paymentMethod, double amount);
	OrderDTO updateOrder(OrderDTO orderDTO);
	List<OrderDTO> viewMyOrders(List<Integer> pizzaIds);
}
