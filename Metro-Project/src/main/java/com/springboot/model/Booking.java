package com.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="booking")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Booking {
	@Id @GeneratedValue @Column(name = "booking_id")
 private int bookingId;
	@Column(length = 50)
 private String email;
	@Column(name = "no_of_ticket")
 private int noofTicket;
	@Column(length = 20 ,name="fromstation")
 private String from;
	@Column(length = 20,name="tostation")
 private String to;
	@Column(name = "totalfare")
 private double totalFare;
 
}
