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
    private long id; 

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
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Timestamp getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}
	public Timestamp getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Timestamp updatedAt) {
		this.updatedAt = updatedAt;
	}
	public Timestamp getLastLogin() {
		return lastLogin;
	}
	public void setLastLogin(Timestamp lastLogin) {
		this.lastLogin = lastLogin;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Map<String, Object> getPermissions() {
		return permissions;
	}
	public void setPermissions(Map<String, Object> permissions) {
		this.permissions = permissions;
	}
	public String getAdminNotes() {
		return adminNotes;
	}
	public void setAdminNotes(String adminNotes) {
		this.adminNotes = adminNotes;
	}
	public String getIpAddress() {
		return ipAddress;
	}
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
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
    
    
}
