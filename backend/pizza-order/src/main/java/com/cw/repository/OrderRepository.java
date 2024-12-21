package com.cw.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cw.entity.Order;

public interface OrderRepository extends JpaRepository<Order,Integer> {

}
