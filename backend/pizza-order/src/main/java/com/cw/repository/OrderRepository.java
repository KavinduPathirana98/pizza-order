package com.cw.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cw.entity.Order;
import com.cw.entity.User;
@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {

    @Query("SELECT u FROM Order u WHERE u.pizza.id IN :pizzaIds")
    List<Order> findOrdersByPizzaIds(@Param("pizzaIds") List<Integer> pizzaIds);
}
