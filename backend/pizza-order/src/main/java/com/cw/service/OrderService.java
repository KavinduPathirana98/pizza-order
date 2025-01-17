package com.cw.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cw.dto.OrderDTO;
import com.cw.dto.PizzaDTO;
import com.cw.dto.OrderDTO;
import com.cw.entity.LoyaltyAccount;
import com.cw.entity.Order;
import com.cw.entity.Payment;
import com.cw.entity.Pizza;
import com.cw.entity.User;
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

	@Override
	// Create Order
	public OrderDTO addOrder(OrderDTO orderDTO, int paymentMethod, double amount) {
		try {
			// Manipulate Order Data
			Order order = new Order();
			BeanUtils.copyProperties(orderDTO, order, "id");
			Order response = _repo.save(order);
			OrderDTO returnObect = new OrderDTO();
			BeanUtils.copyProperties(response, returnObect);

			// Insert Payment Details
			Payment payment = new Payment();

			payment.setOrder(response);
			payment.setAmount(amount);
			payment.setPaymentMethod(paymentMethod);

			Payment paymentReturn = new Payment();
			paymentReturn = _paymentRepo.save(payment);

			// Update Loyalty Points
			LoyaltyAccount existing = _loyaltyRepo.findLoyaltyAccountByUserId(orderDTO.getPizza().getUser().getId());
			System.out.println(existing + "hi");

			// Point Calculation
			int newPoints = (int) amount / 1000;

			if (existing != null) {
				// Updating Points Before Sending to Database
				newPoints = newPoints + existing.getPoints();

				// Add Points into model
				existing.setPoints(newPoints);

				// Updating Data
				_loyaltyRepo.save(existing);
			} else {
				// If existing is null, create a new LoyaltyAccount
				existing = new LoyaltyAccount();
				existing.setPoints(newPoints);

				existing.setUser(orderDTO.getPizza().getUser());
				// Insert Data
				_loyaltyRepo.save(existing);
			}

			return returnObect;
		} catch (Exception ex) {
			throw ex;
		}

	}

	@Override
	// Update Order
	public OrderDTO updateOrder(OrderDTO orderDTO) {
		try {
			Order order = new Order();
			BeanUtils.copyProperties(orderDTO, order);
			Order response = _repo.save(_repo.findById(orderDTO.getId()).get());
			OrderDTO returnObect = new OrderDTO();
			BeanUtils.copyProperties(response, returnObect);
			return returnObect;
		} catch (Exception ex) {
			throw ex;
		}

	}

	@Override
	public List<OrderDTO> viewMyOrders(String pizzaIds) {
		try {
			List<OrderDTO> response = new ArrayList<>();
			 // Convert comma-separated string to List<Integer>
		    List<Integer> pizzaIdList = Arrays.stream(pizzaIds.split(","))
		                                      .map(String::trim) // Remove any extra spaces
		                                      .map(Integer::parseInt) // Convert to Integer
		                                      .collect(Collectors.toList());

		
			List<Order> order = _repo.findOrdersByPizzaIds(pizzaIdList);
			
			   for (int i = 0; i < order.size(); i++) {  // Change the condition to i < data.size()
		            OrderDTO orderDTO = new OrderDTO();
		            orderDTO.setId(order.get(i).getId());
		            orderDTO.setAddress(order.get(i).getAddress());
		            orderDTO.setType(order.get(i).getType());
		            orderDTO.setStatus(order.get(i).getStatus());
		            orderDTO.setTp(order.get(i).getTp());
		            
		            Pizza Pizza = new Pizza();
		            Pizza.setCheese(order.get(i).getPizza().getCheese());
		            Pizza.setName(order.get(i).getPizza().getName());
		            Pizza.setCrust(order.get(i).getPizza().getCrust());
		            Pizza.setSauce(order.get(i).getPizza().getSauce());
		            Pizza.setToppings(order.get(i).getPizza().getToppings());
		            Pizza.setSize(order.get(i).getPizza().getSize());
		            Pizza.setPrice(order.get(i).getPizza().getPrice());
		            
		            User user=new User();
		            
		            orderDTO.setPizza(Pizza);
		            response.add(orderDTO);
		        }
			BeanUtils.copyProperties(order, response);
			return response;
		} catch (Exception ex) {
			throw ex;
		}

	}
}
