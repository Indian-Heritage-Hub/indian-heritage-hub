package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Feedback;

public interface FeedbackDaos extends JpaRepository<Feedback, Long>{

}
