package com.skilldistillery.entities;
import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Camping {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;

	private String location;
	
	private LocalDate date;
	
	private Double distance;
	
	private Double price;

	public Camping() {
		super();
	}

	public Camping(int id, String name, String location, LocalDate date, Double distance, Double price) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
		this.date = date;
		this.distance = distance;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Double getDistance() {
		return distance;
	}

	public void setDistance(Double distance) {
		this.distance = distance;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	@Override
	public int hashCode() {
		return Objects.hash(date, distance, id, location, name, price);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Camping other = (Camping) obj;
		return Objects.equals(date, other.date) && Objects.equals(distance, other.distance) && id == other.id
				&& Objects.equals(location, other.location) && Objects.equals(name, other.name)
				&& Objects.equals(price, other.price);
	}

	@Override
	public String toString() {
		return "Camping [id=" + id + ", name=" + name + ", location=" + location + ", date=" + date + ", distance="
				+ distance + ", price=" + price + "]";
	}
	
	
}
