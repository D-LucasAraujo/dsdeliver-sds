package com.lucasaraujo.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lucasaraujo.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
