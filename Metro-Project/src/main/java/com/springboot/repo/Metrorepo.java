package com.springboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.model.Metro;

@Repository
public interface Metrorepo extends JpaRepository<Metro, String>{
	@Query("from Metro where email =:email and Password=:password")
	Metro findByEmailAndPassword(String email, String password);

}
