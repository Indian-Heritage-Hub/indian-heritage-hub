package com.indianh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.indianh.entity.User;
import com.indianh.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	
	 @Autowired
	    private UserService userService;


    @GetMapping("/profile")
    public String getProfile() {
        return "Welcome! This is your profile.";
    }
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
