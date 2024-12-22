package com.cw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cw.entity.FeedBack;

@Repository
public interface FeedBackRepository extends JpaRepository<FeedBack, Integer>{

}
