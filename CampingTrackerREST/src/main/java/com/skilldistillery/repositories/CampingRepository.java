package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Camping;

public interface CampingRepository extends JpaRepository<Camping, Integer> {

}
