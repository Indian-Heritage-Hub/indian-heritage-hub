-- MySQL dump 10.13  Distrib 9.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: indian_heritage_hub_dbs
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `role` varchar(50) DEFAULT NULL,
  `permissions` json DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `phone_no` varchar(20) DEFAULT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `failed_login_attempts` int DEFAULT '0',
  `locked_until` timestamp NULL DEFAULT NULL,
  `last_password_change` timestamp NULL DEFAULT NULL,
  `last_password_reset_request` timestamp NULL DEFAULT NULL,
  `failed_login_reset_at` timestamp NULL DEFAULT NULL,
  `admin_notes` text,
  `ip_address` varchar(45) DEFAULT NULL,
  `last_logout` timestamp NULL DEFAULT NULL,
  `login_history` json DEFAULT NULL,
  `deactivation_reason` text,
  `account_type` varchar(50) DEFAULT NULL,
  `user_id` char(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_admin_user` (`user_id`),
  CONSTRAINT `fk_admin_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_interactions`
--

DROP TABLE IF EXISTS `article_interactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_interactions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `article_id` bigint DEFAULT NULL,
  `user_id` char(36) DEFAULT NULL,
  `interaction_type` varchar(50) DEFAULT NULL,
  `interaction_timestamp` timestamp NULL DEFAULT NULL,
  `comment_text` text,
  `ip_address` varchar(45) DEFAULT NULL,
  `device_type` varchar(50) DEFAULT NULL,
  `reaction` varchar(50) DEFAULT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_interactions_article` (`article_id`),
  KEY `fk_interactions_user` (`user_id`),
  CONSTRAINT `fk_interactions_article` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`),
  CONSTRAINT `fk_interactions_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_interactions`
--

LOCK TABLES `article_interactions` WRITE;
/*!40000 ALTER TABLE `article_interactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_interactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_metadata`
--

DROP TABLE IF EXISTS `article_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_metadata` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `article_id` bigint DEFAULT NULL,
  `word_count` int DEFAULT NULL,
  `read_time` int DEFAULT NULL,
  `image_count` int DEFAULT NULL,
  `video_count` int DEFAULT NULL,
  `author_notes` text,
  `average_rating` decimal(3,2) DEFAULT NULL,
  `view_count` int DEFAULT NULL,
  `comment_count` int DEFAULT NULL,
  `featured_image_url` varchar(255) DEFAULT NULL,
  `author_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_metadata_article` (`article_id`),
  KEY `fk_metadata_author` (`author_id`),
  CONSTRAINT `fk_metadata_article` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`),
  CONSTRAINT `fk_metadata_author` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_metadata`
--

LOCK TABLES `article_metadata` WRITE;
/*!40000 ALTER TABLE `article_metadata` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `author_id` bigint DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `content` text,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `published_at` timestamp NULL DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `tags` json DEFAULT NULL,
  `meta_keywords` json DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `article_image` varchar(255) DEFAULT NULL,
  `article_video` varchar(255) DEFAULT NULL,
  `comments_enabled` tinyint(1) DEFAULT '1',
  `feedback_enabled` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_articles_author` (`author_id`),
  CONSTRAINT `fk_articles_author` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `audit_logs`
--

DROP TABLE IF EXISTS `audit_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audit_logs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `action_type` varchar(50) DEFAULT NULL,
  `action_details` text,
  `admin_id` bigint DEFAULT NULL,
  `affected_entity` varchar(255) DEFAULT NULL,
  `entity_id` bigint DEFAULT NULL,
  `action_timestamp` timestamp NULL DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_audit_admin` (`admin_id`),
  CONSTRAINT `fk_audit_admin` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audit_logs`
--

LOCK TABLES `audit_logs` WRITE;
/*!40000 ALTER TABLE `audit_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `audit_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `phone_no` varchar(20) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `verified` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `bio` text,
  `social_links` json DEFAULT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `notifications` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `article_id` bigint DEFAULT NULL,
  `user_id` char(36) DEFAULT NULL,
  `comment_text` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` char(36) DEFAULT NULL,
  `article_id` bigint DEFAULT NULL,
  `rating` decimal(3,2) DEFAULT NULL,
  `comment` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_feedback_user` (`user_id`),
  KEY `fk_feedback_article` (`article_id`),
  CONSTRAINT `fk_feedback_article` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`),
  CONSTRAINT `fk_feedback_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` char(36) DEFAULT NULL,
  `sender_id` char(36) DEFAULT NULL,
  `notification_type` varchar(50) DEFAULT NULL,
  `message` text,
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `reference_id` bigint DEFAULT NULL,
  `reference_type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_notifications_user` (`user_id`),
  KEY `fk_notifications_sender` (`sender_id`),
  CONSTRAINT `fk_notifications_sender` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_notifications_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `search_history`
--

DROP TABLE IF EXISTS `search_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `search_history` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` char(36) DEFAULT NULL,
  `search_query` text,
  `search_timestamp` timestamp NULL DEFAULT NULL,
  `results_count` int DEFAULT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_search_user` (`user_id`),
  CONSTRAINT `fk_search_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `search_history`
--

LOCK TABLES `search_history` WRITE;
/*!40000 ALTER TABLE `search_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `search_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_engagement`
--

DROP TABLE IF EXISTS `user_engagement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_engagement` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` char(36) DEFAULT NULL,
  `target_user_id` char(36) DEFAULT NULL,
  `article_id` bigint DEFAULT NULL,
  `interaction_type` varchar(50) DEFAULT NULL,
  `interaction_details` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_engagement_user` (`user_id`),
  KEY `fk_engagement_target_user` (`target_user_id`),
  KEY `fk_engagement_article` (`article_id`),
  CONSTRAINT `fk_engagement_article` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`),
  CONSTRAINT `fk_engagement_target_user` FOREIGN KEY (`target_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_engagement_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_engagement`
--

LOCK TABLES `user_engagement` WRITE;
/*!40000 ALTER TABLE `user_engagement` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_engagement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `mobile_no` bigint DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `last_login` date DEFAULT NULL,
  `notification` tinyint(1) DEFAULT '1',
  `bookmark` json DEFAULT NULL,
  `status` varchar(50) DEFAULT 'active',
  `profile_pic` varchar(255) DEFAULT NULL,
  `bio` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-20  0:02:51
