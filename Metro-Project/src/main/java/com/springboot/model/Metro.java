package com.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="signup")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Metro {
	@Id @Column(name = "Email",length = 50) 
	private String email;
	@Column (name = "First_name" , length=50)
	private String firstName;
	@Column (name = "Last_name" ,length=50)
	private String lastName;
	@Column (name = "Contact_no")
	private double contactNo;
	@Column (name = "Date_of_birth",length=20)
	private String dob;
	@Column (name = "Blood_group",length=10)
	private String bloodGroup;
	@Column (name = "Password" ,length=20)
	private String Password;
}
