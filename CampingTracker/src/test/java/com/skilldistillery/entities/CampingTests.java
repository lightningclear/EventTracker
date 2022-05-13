package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class CampingTests {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Camping camping;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("CampingTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		camping = em.find(Camping.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		camping = null;
	}

	@Test
	@DisplayName("Category Entity Mapping")
	void test() {
		assertNotNull(camping);
		assertEquals("Fireball", camping.getName());
	}

	

}
