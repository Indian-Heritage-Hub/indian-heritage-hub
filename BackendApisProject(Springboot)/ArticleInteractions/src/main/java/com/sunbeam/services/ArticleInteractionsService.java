package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.ArticleInteractions;

public interface ArticleInteractionsService {
	List<ArticleInteractions> getAll();

	ArticleInteractions getById(Long id);

	ArticleInteractions create(ArticleInteractions interaction);

	ArticleInteractions update(Long id, ArticleInteractions interaction);

	void delete(Long id);
}
