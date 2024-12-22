package com.cw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cw.entity.Order;
@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {

}
