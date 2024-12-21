package com.cw.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cw.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer>  {

}
