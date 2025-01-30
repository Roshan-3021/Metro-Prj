package com.springboot.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.model.Booking;

@Repository

public interface Bookingrepo extends JpaRepository<Booking, Integer> {
	@Query("from Booking where email=:email")
	List<Booking> findbyemail(String email);

}
