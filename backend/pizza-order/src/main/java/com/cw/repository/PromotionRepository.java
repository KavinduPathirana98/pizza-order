package com.cw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cw.entity.Promotion;
@Repository
public interface PromotionRepository extends JpaRepository<Promotion, Integer>{

}
