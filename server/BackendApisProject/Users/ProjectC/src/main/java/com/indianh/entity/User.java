package com.indianh.entity;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;




import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;
    
    private String phoneNo;
    private String birthDate;
    private String profilePic;
    private String bio;

    @Lob
    private String socialLinks;

    private String userName;
    private String role;
    private String status;
    private Integer verified;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private Integer notification;
    private Integer failedLoginAttempts;
    private Integer flag;
    private String accountType;
    public User() {
    	
    }
	public User(Long id, String name, String email, String password, String phoneNo, String birthDate,
			String profilePic, String bio, String socialLinks, String userName, String role, String status,
			Integer verified, Timestamp createdAt, Timestamp updatedAt, Integer notification,
			Integer failedLoginAttempts, Integer flag, String accountType) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.birthDate = birthDate;
		this.profilePic = profilePic;
		this.bio = bio;
		this.socialLinks = socialLinks;
		this.userName = userName;
		this.role = role;
		this.status = status;
		this.verified = verified;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.notification = notification;
		this.failedLoginAttempts = failedLoginAttempts;
		this.flag = flag;
		this.accountType = accountType;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}
	public String getProfilePic() {
		return profilePic;
	}
	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	public String getSocialLinks() {
		return socialLinks;
	}
	public void setSocialLinks(String socialLinks) {
		this.socialLinks = socialLinks;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Integer getVerified() {
		return verified;
	}
	public void setVerified(Integer verified) {
		this.verified = verified;
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
	public Integer getNotification() {
		return notification;
	}
	public void setNotification(Integer notification) {
		this.notification = notification;
	}
	public Integer getFailedLoginAttempts() {
		return failedLoginAttempts;
	}
	public void setFailedLoginAttempts(Integer failedLoginAttempts) {
		this.failedLoginAttempts = failedLoginAttempts;
	}
	public Integer getFlag() {
		return flag;
	}
	public void setFlag(Integer flag) {
		this.flag = flag;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", phoneNo="
				+ phoneNo + ", birthDate=" + birthDate + ", profilePic=" + profilePic + ", bio=" + bio
				+ ", socialLinks=" + socialLinks + ", userName=" + userName + ", role=" + role + ", status=" + status
				+ ", verified=" + verified + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + ", notification="
				+ notification + ", failedLoginAttempts=" + failedLoginAttempts + ", flag=" + flag + ", accountType="
				+ accountType + "]";
	}
    
    
}
