package com.sunbeam.controllers;

import com.sunbeam.entities.Feedback;
import com.sunbeam.services.FeedbackServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackServices feedbackServices;

    // Get all feedbacks
    @GetMapping("/all")
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        List<Feedback> list = feedbackServices.getAllFeedbacks();
        return ResponseEntity.ok(list);
    }

    // Get feedback by ID
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable long id) {
        Feedback fb = feedbackServices.getFeedbackById(id);
        if (fb == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(fb);
    }

    // Add feedback
    @PostMapping("/add")
    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback) {
        Feedback saved = feedbackServices.addFeedback(feedback);
        return ResponseEntity.ok(saved);
    }

    // Update feedback (full update)
    @PutMapping("/update/{id}")
    public ResponseEntity<Feedback> updateFeedback(@PathVariable long id, @RequestBody Feedback feedback) {
        Feedback updated = feedbackServices.updateFeedback(id, feedback);
        return ResponseEntity.ok(updated);
    }

    // Delete feedback
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable long id) {
        feedbackServices.deleteFeedback(id);
        return ResponseEntity.ok("Deleted feedback with ID: " + id);
    }

    // Patch: Update specific columns of feedback
    @PatchMapping("/update/{id}")
    public ResponseEntity<Feedback> patchFeedback(@PathVariable long id, @RequestBody Map<String, Object> updates) {
        Feedback fb = feedbackServices.getFeedbackById(id);
        if (fb == null)
            return ResponseEntity.notFound().build();

        updates.forEach((key, value) -> {
            switch (key) {
                case "rating":
                    fb.setRating(new java.math.BigDecimal(value.toString()));
                    break;
                case "comment":
                    fb.setComment((String) value);
                    break;
                case "x1":
                    fb.setX1((String) value);
                    break;
                case "x2":
                    fb.setX2((String) value);
                    break;
                case "x3":
                    fb.setX3((String) value);
                    break;
                case "x4":
                    fb.setX4((String) value);
                    break;
                case "x5":
                    fb.setX5((String) value);
                    break;
                case "x6":
                    fb.setX6((String) value);
                    break;
                // Add other fields as needed
            }
        });

        Feedback updated = feedbackServices.updateFeedback(id, fb);
        return ResponseEntity.ok(updated);
    }
}
