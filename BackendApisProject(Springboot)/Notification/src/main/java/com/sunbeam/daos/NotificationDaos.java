package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Notification;

public interface NotificationDaos extends JpaRepository<Notification, Long> {
	
	List<Notification> findByUserId(Long userId);

	List<Notification> findByIsRead(Boolean isRead);
}
