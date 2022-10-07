-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: j7a202.p.ssafy.io    Database: A202
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game_record`
--

DROP TABLE IF EXISTS `game_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_record` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `chord1` varchar(255) DEFAULT NULL,
  `chord2` varchar(255) DEFAULT NULL,
  `chord3` varchar(255) DEFAULT NULL,
  `chord4` varchar(255) DEFAULT NULL,
  `difficulty` varchar(255) DEFAULT NULL,
  `score1` int DEFAULT NULL,
  `score2` int DEFAULT NULL,
  `score3` int DEFAULT NULL,
  `score4` int DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgkqk8bhd1f2dowbih0svjwkry` (`user_id`),
  CONSTRAINT `FKgkqk8bhd1f2dowbih0svjwkry` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_record`
--

LOCK TABLES `game_record` WRITE;
/*!40000 ALTER TABLE `game_record` DISABLE KEYS */;
INSERT INTO `game_record` VALUES (1,'2022-10-06 12:58:28.780000','2022-10-06 12:58:28.780000','D','E','F','G','normal',49,43,35,37,2421203874),(2,'2022-10-06 12:59:41.960000','2022-10-06 12:59:41.960000','B','C','D','E','normal',43,37,28,41,2435795257),(3,'2022-10-06 13:00:26.520000','2022-10-06 13:00:26.520000','C','D','E','F','normal',30,71,36,39,2435795257),(4,'2022-10-06 13:14:53.894000','2022-10-06 13:14:53.894000','D','E','F','G','normal',0,0,0,0,2421203874),(5,'2022-10-06 13:15:31.586000','2022-10-06 13:15:31.586000','D','E','F','G','normal',0,0,0,0,2421203874),(6,'2022-10-06 13:15:56.061000','2022-10-06 13:15:56.061000','E','F','G','A','normal',0,0,28,0,2421203874),(7,'2022-10-06 13:16:30.993000','2022-10-06 13:16:30.993000','A','B','C','D','normal',0,0,0,0,2421203874),(8,'2022-10-06 13:33:39.691000','2022-10-06 13:33:39.691000','E','F','G','A','normal',0,0,0,0,2471104558),(9,'2022-10-06 14:26:59.897000','2022-10-06 14:26:59.897000','D','E','F','G','normal',0,0,0,54,2435795257),(10,'2022-10-06 14:27:19.923000','2022-10-06 14:27:19.923000','E','F','G','A','normal',0,0,0,0,2471104558),(11,'2022-10-06 14:28:40.667000','2022-10-06 14:28:40.667000','A','B','C','D','normal',0,0,0,0,2435795257),(12,'2022-10-06 14:42:02.906000','2022-10-06 14:42:02.906000','D','E','F','G','normal',0,0,0,0,2471104558),(13,'2022-10-06 14:49:01.686000','2022-10-06 14:49:01.686000','E','F','G','A','normal',0,0,0,0,2435795257),(14,'2022-10-06 14:56:38.910000','2022-10-06 14:56:38.910000','E','F','G','A','normal',0,32,0,0,2471104558),(15,'2022-10-06 14:57:14.099000','2022-10-06 14:57:14.099000','E','F','G','A','normal',0,32,0,0,2471104558),(16,'2022-10-06 15:02:57.351000','2022-10-06 15:02:57.351000','E','F','G','A','normal',0,0,0,0,2471104558),(17,'2022-10-06 15:03:22.899000','2022-10-06 15:03:22.899000','E','F','G','A','normal',0,0,0,0,2471104558),(18,'2022-10-06 15:14:41.178000','2022-10-06 15:14:41.178000','C','D','E','F','normal',66,0,0,0,2471104558),(19,'2022-10-06 15:21:45.151000','2022-10-06 15:21:45.151000','E','F','G','A','normal',0,40,0,0,2471104558),(20,'2022-10-06 16:34:03.384000','2022-10-06 16:34:03.384000','B','C','D','E','normal',0,0,0,0,2435795257),(21,'2022-10-06 17:09:17.528000','2022-10-06 17:09:17.528000','D','E','F','G','normal',0,0,0,0,2421203874),(22,'2022-10-06 17:15:00.600000','2022-10-06 17:15:00.600000','E','F','G','A','normal',0,0,0,0,2421203874),(23,'2022-10-06 17:35:53.013000','2022-10-06 17:35:53.013000','D','E','F','G','hard',0,0,0,0,2435795257),(24,'2022-10-06 17:58:06.503000','2022-10-06 17:58:06.503000','C','D','E','F','normal',33,0,0,0,2471104558),(25,'2022-10-07 00:00:09.552000','2022-10-07 00:00:09.552000','C','G','Am','F','normal',0,0,0,0,2470586685),(26,'2022-10-07 00:03:00.862000','2022-10-07 00:03:00.862000','G','D','Em','G','hard',0,0,88,0,2470586685),(27,'2022-10-07 05:19:46.401000','2022-10-07 05:19:46.401000','C','D','Em','Bm','normal',0,0,47,0,2471104558),(28,'2022-10-07 05:20:46.541000','2022-10-07 05:20:46.541000','C','D','Em','Bm','normal',0,0,97,0,2471104558),(29,'2022-10-07 05:21:19.493000','2022-10-07 05:21:19.493000','D','A','E','A','normal',0,0,0,0,2471104558),(30,'2022-10-07 05:21:48.453000','2022-10-07 05:21:48.453000','Em','C','D','G','normal',95,0,0,99,2471104558);
/*!40000 ALTER TABLE `game_record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07 11:10:36