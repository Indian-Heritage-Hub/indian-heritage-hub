package com.sunbeam.entities;

import java.sql.Timestamp;
import java.util.Map;

import com.sunbeam.converter.MapToJsonConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@RequiredArgsConstructor
@Setter
@Getter
@ToString

@Entity
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; // Use long for bigint

    private String name;

    private String email;

    private String password;

    private String role;

    private Timestamp createdAt;

    private Timestamp updatedAt;

    private Timestamp lastLogin;

    private String status;

    @Convert(converter = MapToJsonConverter.class)
    private Map<String, Object> permissions;

    private String adminNotes;

    private String ipAddress;

    private String x1;
    private String x2;
    private String x3;
    private String x4;
    private String x5;
}
