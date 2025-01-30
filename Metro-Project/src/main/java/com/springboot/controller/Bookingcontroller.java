package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Booking;
import com.springboot.repo.Bookingrepo;

@RestController
@CrossOrigin("*")
public class Bookingcontroller {
	@Autowired
	Bookingrepo repo;
	
	@PostMapping("/addbooking/{email}")
	public void addBooking(@RequestBody Booking b,@PathVariable String email) {
		System.out.println(email);
		b.setEmail(email);
		b.setTotalFare(b.getNoofTicket()*20);
		System.out.println(b);
		repo.save(b);
	}

	@GetMapping("/getthebooking/{email}")
	public List<Booking> getTheBooking(@PathVariable String email) {
		System.out.println(email);
		List<Booking> bookings=repo.findbyemail(email);
		return bookings;
		
	}
	
}
