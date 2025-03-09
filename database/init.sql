-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 09, 2025 at 07:53 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meeting_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `development_groups`
--

CREATE TABLE `development_groups` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `development_groups`
--

INSERT INTO `development_groups` (`id`, `name`, `created_at`, `updated_at`) VALUES
('8a1d5ed9-fcb7-11ef-81e6-0242ac110004', 'UI', '2025-03-09 07:23:58', '2025-03-09 07:23:58'),
('8a1d6870-fcb7-11ef-81e6-0242ac110004', 'Mobile', '2025-03-09 07:23:58', '2025-03-09 07:23:58'),
('8ddc7107-fcb7-11ef-81e6-0242ac110004', 'Backend', '2025-03-09 07:24:31', '2025-03-09 07:24:31');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `development_groups_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `description` varchar(240) COLLATE utf8mb4_unicode_ci NOT NULL,
  `room` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `development_groups_id`, `start_date`, `end_date`, `description`, `room`, `created_at`, `updated_at`) VALUES
('3a1bb145-fcb8-11ef-81e6-0242ac110004', '8ddc7107-fcb7-11ef-81e6-0242ac110004', '2025-03-12 13:30:00', '2025-03-12 16:30:00', 'Development of a new API for external system integration', 'Large Board Room', '2025-03-09 07:27:32', '2025-03-09 07:27:32'),
('3a1bbac1-fcb8-11ef-81e6-0242ac110004', '8a1d5ed9-fcb7-11ef-81e6-0242ac110004', '2025-03-13 17:00:00', '2025-03-13 18:00:00', 'Design brainstorming for new user interface', 'Green Room', '2025-03-09 07:27:32', '2025-03-09 07:27:32'),
('54d44523-fcb8-11ef-81e6-0242ac110004', '8a1d6870-fcb7-11ef-81e6-0242ac110004', '2025-03-14 12:00:00', '2025-03-14 14:00:00', 'Mobile QA coordination meeting', 'Conference Room A', '2025-03-09 07:29:27', '2025-03-09 07:29:27'),
('f60e81e5-fcb7-11ef-81e6-0242ac110004', '8a1d5ed9-fcb7-11ef-81e6-0242ac110004', '2025-03-12 09:30:00', '2025-03-12 10:30:00', 'Weekly UI team review', 'Blue Room', '2025-03-09 07:24:46', '2025-03-09 07:24:46'),
('f60e87b9-fcb7-11ef-81e6-0242ac110004', '8a1d6870-fcb7-11ef-81e6-0242ac110004', '2025-03-12 11:00:00', '2025-03-12 13:00:00', 'Mobile app version update and new content presentation', 'New York Room', '2025-03-09 07:24:46', '2025-03-09 07:24:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `development_groups`
--
ALTER TABLE `development_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `development_groups_id` (`development_groups_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`development_groups_id`) REFERENCES `development_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
