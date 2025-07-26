package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Feedback;

public interface FeedbackServices {
	
	Feedback addFeedback(Feedback feedback);

	Feedback updateFeedback(Long id, Feedback feedback);

	List<Feedback> getAllFeedbacks();

	Feedback getFeedbackById(Long id);

	void deleteFeedback(Long id);
}
