package com.cw.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cw.entity.Pizza;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Integer>  {

    @Query("SELECT * FROM Pizza P WHERE P.userId = :userId")
    List<Pizza> findPizzaByUserId(@Param("userId") int userId);
    

}
