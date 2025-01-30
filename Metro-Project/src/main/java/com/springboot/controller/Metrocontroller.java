package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Metro;
import com.springboot.repo.Metrorepo;

@RestController
@CrossOrigin("http://localhost:4200")
public class Metrocontroller {
	
	@Autowired
	Metrorepo repo;
	
	@PostMapping("/adduser")
	public void addUser(@RequestBody Metro m) {
		System.out.println(m);
		repo.save(m);
	}
	
	@GetMapping("/perform_login/{email}/{password}")
	public Metro performLogin(@PathVariable String email, @PathVariable String password) {

		System.out.println("performLogin " + email + "----" + password);
		// Check if the user exists in the database
		Metro user = repo.findByEmailAndPassword(email, password);
		System.out.println(user);
		if (user != null) {
			System.out.println("success");
			return user;
		} else {
			System.out.println("fail");
			return null;
		}
	}

}
