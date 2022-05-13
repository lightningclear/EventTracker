package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Camping;
import com.skilldistillery.repositories.CampingRepository;

@Service
public class CampingServiceImpl implements CampingService {
	
	@Autowired
	CampingRepository campo;

	@Override
	public List<Camping> index() {
		return campo.findAll();
	}
	
//	@Override
//	public List<Post> getPostsForCategory(int catId) {
//		return postRepo.findByCategory_id(catId);
//	}

	@Override
	public Camping findById(int id) {
		Camping camp = null;
		Optional<Camping> camping = campo.findById(id);
		if(camping.isPresent()) {
			camp = camping.get();
		}
		return camp;
	}
	
//	public Camping searchByKeyword(String keyword) {
//		keyword = "%" + keyword + "%";
//		return campo.findby(keyword, keyword);
//	}

	@Override
	public Camping create(Camping camp) {
			return campo.saveAndFlush(camp);
	}

	@Override
	public Camping update(int id, Camping camp) {
		camp.setId(id);
		return campo.saveAndFlush(camp);
	}

	@Override
	public Boolean delete(int id) {
		boolean deleted = false;
		Optional<Camping> camping = campo.findById(id);
		if(camping.isPresent()) {
			campo.deleteById(id);
			deleted = true;
		}
		return false;
	}

}
