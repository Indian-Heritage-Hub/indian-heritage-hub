package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.ArticleInteractions;

public interface ArticleInteractionsDaos extends JpaRepository<ArticleInteractions, Long> {
	
	
}
