package com.sunbeam.controllers;

import java.util.List;
import java.util.Map;

import com.sunbeam.entities.Notification;
import com.sunbeam.services.NotificationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notification")

public class NotificationControllers {
	@Autowired
	private NotificationService notificationService;

	@GetMapping("/all")
	public ResponseEntity<List<Notification>> getAllNotifications() {
		List<Notification> list = notificationService.getAll();
		return ResponseEntity.ok(list);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Notification> getNotificationById(@PathVariable long id) {
		Notification notif = notificationService.getById(id);
		return notif != null ? ResponseEntity.ok(notif) : ResponseEntity.notFound().build();
	}

	@PostMapping("/add")
	public ResponseEntity<Notification> createNotification(@RequestBody Notification notification) {
		Notification created = notificationService.create(notification);
		return ResponseEntity.ok(created);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Notification> updateNotification(@PathVariable long id,
			@RequestBody Notification notification) {
		Notification updated = notificationService.update(id, notification);
		return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteNotification(@PathVariable long id) {
		boolean deleted = notificationService.delete(id);
		return deleted ? ResponseEntity.ok("Deleted notification with ID: " + id) : ResponseEntity.notFound().build();
	}

	@GetMapping("/user/{userId}")
	public ResponseEntity<List<Notification>> getByUserId(@PathVariable Long userId) {
		List<Notification> list = notificationService.getByUserId(userId);
		return ResponseEntity.ok(list);
	}

	@PatchMapping("/update/{id}")
	public ResponseEntity<Notification> updateFields(@PathVariable long id, @RequestBody Map<String, Object> updates) {
		Notification notification = notificationService.getById(id);
		if (notification == null)
			return ResponseEntity.notFound().build();

		updates.forEach((key, value) -> {
			switch (key) {
			case "userId" -> notification.setUserId(((Number) value).longValue());
			case "senderId" -> notification.setSenderId(((Number) value).longValue());
			case "notificationType" -> notification.setNotificationType((String) value);
			case "message" -> notification.setMessage((String) value);
			case "isRead" -> notification.setIsRead((Boolean) value);
			case "referenceId" -> notification.setReferenceId(((Number) value).longValue());
			case "referenceType" -> notification.setReferenceType((String) value);
			case "x1" -> notification.setX1((String) value);
			case "x2" -> notification.setX2((String) value);
			case "x3" -> notification.setX3((String) value);
			case "x4" -> notification.setX4((String) value);
			case "x5" -> notification.setX5((String) value);
			case "x6" -> notification.setX6((String) value);
			}
		});

		Notification updated = notificationService.create(notification);
		return ResponseEntity.ok(updated);
	}
}