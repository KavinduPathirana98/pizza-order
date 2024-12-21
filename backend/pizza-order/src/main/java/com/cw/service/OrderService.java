package com.cw.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cw.dto.OrderDTO;
import com.cw.entity.LoyaltyAccount;
import com.cw.entity.Order;
import com.cw.entity.Payment;
import com.cw.repository.LoyaltyAccountRepository;
import com.cw.repository.OrderRepository;
import com.cw.repository.PaymentRepository;
import com.cw.repository.PizzaRepository;
import com.cw.service_interface.IOrderService;

@Service
public class OrderService implements IOrderService {

	
	@Autowired
	private OrderRepository _repo;
	@Autowired
	private LoyaltyAccountRepository _loyaltyRepo;
	@Autowired
	private PaymentRepository _paymentRepo;
//	@Autowired
//	private PizzaRepository _pizzaRepo;
	
	//Create Order
	public OrderDTO addOrder(OrderDTO orderDTO, int paymentMethod, double amount)
	{
		//Manipulate Order Data
		  Order order=new Order();
		  BeanUtils.copyProperties(orderDTO, order,"id");
		  Order response = _repo.save(order);
		  OrderDTO returnObect=  new OrderDTO();
		  BeanUtils.copyProperties(response, returnObect);
		  
		  //Insert Payment Details
		  Payment payment=new Payment();
		  
		  payment.setOrder(response);
		  payment.setAmount(amount);
		  payment.setPaymentMethod(paymentMethod);
		  
		  Payment  paymentReturn = new Payment();
		  paymentReturn=_paymentRepo.save(payment);
		  
		  //Update Loyalty Points
		  LoyaltyAccount existing=new LoyaltyAccount();
		  existing=_loyaltyRepo.findLoyaltyAccountByUserId(orderDTO.getPizza().getUser().getId());
		  
		  //Point Calculation
		  int newPoints=(int)amount/1000;
		  
		  if(existing!=null)
		  {

			  
			  //Updating Points Before Sending to Dtabase
			  newPoints=newPoints+existing.getPoints();
			  
			  //Add Points into model
			  existing.setPoints(newPoints);
			  
			  //Updating Data
			  _loyaltyRepo.save(existing);
		  }
		  else if(existing==null)
		  {
			  //Add data into model
			  existing.setPoints(newPoints);
			  
			  existing.setUser(orderDTO.getPizza().getUser());
			  //Insert Data
			  _loyaltyRepo.save(existing); 
		  }
		  
		  
		  return returnObect;
		  
	
	}
	
	//Update Order
	public OrderDTO updateOrder(OrderDTO orderDTO)
	{
		
		  Order order=new Order();
		  BeanUtils.copyProperties(orderDTO, order);
		  Order response =_repo.save(_repo.findById(orderDTO.getId()).get());
		  OrderDTO returnObect=  new OrderDTO();
		  BeanUtils.copyProperties(response, returnObect);
		  return returnObect;
	}
}
