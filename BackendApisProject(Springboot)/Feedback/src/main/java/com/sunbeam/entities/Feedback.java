package com.sunbeam.entities;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "feedback")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Feedback {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private Long userId;
	    private Long articleId;
	    private BigDecimal rating;
	    
	    private String comment;

	    private LocalDateTime createdAt;
	    private LocalDateTime updatedAt;

	    private String x1;
	    private String x2;
	    private String x3;
	    private String x4;
	    private String x5;
	    private String x6;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Long getUserId() {
			return userId;
		}
		public void setUserId(Long userId) {
			this.userId = userId;
		}
		public Long getArticleId() {
			return articleId;
		}
		public void setArticleId(Long articleId) {
			this.articleId = articleId;
		}
		public BigDecimal getRating() {
			return rating;
		}
		public void setRating(BigDecimal rating) {
			this.rating = rating;
		}
		public String getComment() {
			return comment;
		}
		public void setComment(String comment) {
			this.comment = comment;
		}
		public LocalDateTime getCreatedAt() {
			return createdAt;
		}
		public void setCreatedAt(LocalDateTime createdAt) {
			this.createdAt = createdAt;
		}
		public LocalDateTime getUpdatedAt() {
			return updatedAt;
		}
		public void setUpdatedAt(LocalDateTime updatedAt) {
			this.updatedAt = updatedAt;
		}
		public String getX1() {
			return x1;
		}
		public void setX1(String x1) {
			this.x1 = x1;
		}
		public String getX2() {
			return x2;
		}
		public void setX2(String x2) {
			this.x2 = x2;
		}
		public String getX3() {
			return x3;
		}
		public void setX3(String x3) {
			this.x3 = x3;
		}
		public String getX4() {
			return x4;
		}
		public void setX4(String x4) {
			this.x4 = x4;
		}
		public String getX5() {
			return x5;
		}
		public void setX5(String x5) {
			this.x5 = x5;
		}
		public String getX6() {
			return x6;
		}
		public void setX6(String x6) {
			this.x6 = x6;
		}
		
	    
	}

