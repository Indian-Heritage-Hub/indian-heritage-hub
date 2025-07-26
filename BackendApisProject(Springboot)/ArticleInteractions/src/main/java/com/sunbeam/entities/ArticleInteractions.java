package com.sunbeam.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "article_interactions")

public class ArticleInteractions {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long articleId;
	private Long userId;
	private String interactionType;

	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private java.sql.Timestamp interactionTimestamp;

	@Column(columnDefinition = "TEXT")
	private String commentText;

	private String ipAddress;
	private String deviceType;
	private String reaction;
	private String sessionId;

	@Column(columnDefinition = "JSON")
	private String interactionDetails;

	private String x1;
	private String x2;
	private String x3;
	private String x4;
	private String x5;
	private String x6;
	
	public void setId(Long id2) {
		// TODO Auto-generated method stub
		
	}
}
