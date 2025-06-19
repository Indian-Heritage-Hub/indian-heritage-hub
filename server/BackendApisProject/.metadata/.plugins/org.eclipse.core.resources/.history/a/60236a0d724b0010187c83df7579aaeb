package com.sunbeam.controllers;

import com.sunbeam.entities.Admin;
import com.sunbeam.services.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	// Get all admins
	@GetMapping("/all")
	public ResponseEntity<List<Admin>> getAllAdmins() {
		List<Admin> admins = adminService.findAll();
		return ResponseEntity.ok(admins);
	}

	// Get admin by ID
	@GetMapping("/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable long id) {
		Optional<Admin> admin = adminService.findById(id);
		return admin.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	// Register a new admin
	@PostMapping("/register")
	public ResponseEntity<Admin> registerAdmin(@RequestBody Admin admin) {
		Admin registeredAdmin = adminService.save(admin); // you can customize logic here
		return ResponseEntity.ok(registeredAdmin);
	}

	// Update an existing admin
	@PutMapping("/update/{id}")
	public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin) {
		Admin updatedAdmin = adminService.save(admin);
		return ResponseEntity.ok(updatedAdmin);
	}

	// Delete admin by ID
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteAdmin(@PathVariable int id) {
		adminService.deleteById(id);
		return ResponseEntity.ok("Deleted admin with ID: " + id);
	}

	@PostMapping("/login")
	public ResponseEntity<Admin> login(@RequestBody Map<String, String> credentials) {
		String email = credentials.get("email");
		String password = credentials.get("password");

		Admin admin = adminService.login(email, password);

		if (admin != null) {
			return ResponseEntity.ok(admin);
		}

		else {
			return ResponseEntity.status(401).build(); // Unauthorized
		}
	}

	@PatchMapping("/update/{id}")
	public ResponseEntity<Admin> UpdateColumnAdmin(@PathVariable long id, @RequestBody Map<String, Object> update) {
		Optional<Admin> optionalAdmin = adminService.findById(id);
		if (optionalAdmin.isEmpty()) {
			return ResponseEntity.notFound().build();
		}

		Admin admin = optionalAdmin.get();

		update.forEach((key, value) -> {
			switch (key) {
			case "name":
				admin.setName((String) value);
				break;
			case "email":
				admin.setEmail((String) value);
				break;
			case "password":
				admin.setPassword((String) value);
				break;
			case "role":
				admin.setRole((String) value);
				break;
			case "status":
				admin.setStatus((String) value);
				break;
			case "adminNotes":
				admin.setAdminNotes((String) value);
				break;
			case "ipAddress":
				admin.setIpAddress((String) value);
				break;
			// Add more fields as needed
			}
		});

		Admin updatedAdmin = adminService.save(admin);
		return ResponseEntity.ok(updatedAdmin);
	}
}
