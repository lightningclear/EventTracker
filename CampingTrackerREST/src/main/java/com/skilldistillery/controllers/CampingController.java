package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Camping;
import com.skilldistillery.services.CampingService;

@RestController
@RequestMapping("api")
public class CampingController {
	
	@Autowired
	CampingService serv;

	@GetMapping("index")
	public List<Camping> index(){
		return serv.index();
		
	}
	
	@GetMapping("camp/{id}")
	public Camping findById(@PathVariable int id) {
		return serv.findById(id); //change
	}
	
	
	
	@DeleteMapping("camp/{id}")
	public boolean delete(@PathVariable int id) {
		return serv.delete(id);
	}
}
