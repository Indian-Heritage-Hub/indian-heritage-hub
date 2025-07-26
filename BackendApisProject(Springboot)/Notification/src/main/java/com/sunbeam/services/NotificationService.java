package com.sunbeam.services;

import java.util.List;

import com.sunbeam.entities.Notification;

public interface NotificationService {

	Notification create(Notification notification);

	Notification update(Long id, Notification notification);

	boolean delete(Long id);

	Notification getById(Long id);

	List<Notification> getAll();

	List<Notification> getByUserId(Long userId);
}
