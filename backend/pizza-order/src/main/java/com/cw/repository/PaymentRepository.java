package com.cw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cw.entity.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer>  {

}
