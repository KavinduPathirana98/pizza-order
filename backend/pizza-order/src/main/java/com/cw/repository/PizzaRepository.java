package com.cw.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cw.entity.Pizza;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza, Integer>  {

	@Query(value = "SELECT `id`, `cheese`, `crust`, `favourite`, `name`, `price`, `sauce`, `size`, `toppings`,`user_id` FROM `pizza` WHERE user_id=:id", nativeQuery = true)
	List<Pizza> findPizzaByUserId(@Param("id") int id);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE pizza SET favourite = :favourite WHERE id = :id", nativeQuery = true)
	int updatePizzaFavourite(@Param("id") int id, @Param("favourite") boolean favourite);
    

}
