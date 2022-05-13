package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Camping;

public interface CampingService {
	List<Camping> index();
	public Camping findById(int id);
//	public Camping searchByKeyword(String keyword);
	public Camping create(Camping camp);
	public Camping update(int id, Camping camp);
	public Boolean delete(int campId);
}
