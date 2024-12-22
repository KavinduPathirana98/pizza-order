package com.cw.pizza_order;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.cw.entity")
@ComponentScan(basePackages = "com.cw")
@EnableJpaRepositories(basePackages = "com.cw.repository")
public class PizzaOrderApplication {

	public static void main(String[] args) {
		SpringApplication.run(PizzaOrderApplication.class, args);
	}

}
