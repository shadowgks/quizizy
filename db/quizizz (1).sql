-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 03 jan. 2023 à 21:25
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quizizz`
--

-- --------------------------------------------------------

--
-- Structure de la table `answers`
--

DROP TABLE IF EXISTS `answers`;
CREATE TABLE IF NOT EXISTS `answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `answer` text COLLATE utf8mb4_bin NOT NULL,
  `etat` tinyint(1) NOT NULL,
  `id_question` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `answers`
--

INSERT INTO `answers` (`id`, `answer`, `etat`, `id_question`) VALUES
(50, 'Amazon EC2 costs are billed on a monthly basis', 0, 1),
(51, 'Users retain full administrative access to their Amazon EC2 instances', 0, 1),
(52, 'Amazon EC2 instances can be launched on demand when needed', 1, 1),
(53, 'Users can permanently run enough instances to handle peak workloads', 0, 1),
(54, 'AWS Storage Gateway', 0, 2),
(55, 'AWS Database Migration Service (AWS DMS)', 1, 2),
(56, 'Amazon EC2', 0, 2),
(57, 'Amazon AppStream 2.0', 0, 2),
(58, 'AWS Config', 0, 3),
(59, 'AWS OpsWorks', 0, 3),
(60, 'AWS SDK', 0, 3),
(61, 'AWS Marketplace', 1, 3),
(62, 'AWS Config', 0, 4),
(63, 'Amazon Route 53', 0, 4),
(64, 'AWS Direct Connect', 0, 4),
(65, 'Amazon Virtual Private Cloud (Amazon VPC)', 1, 4),
(66, 'Configuring third-party applications', 0, 5),
(67, 'Maintaining physical hardware', 1, 5),
(68, 'Securing application access and data', 0, 5),
(69, 'Managing guest operating systems', 0, 5),
(70, 'AWS Regions', 0, 6),
(71, 'Edge locations', 1, 6),
(72, 'Availability Zones', 0, 6),
(73, 'Virtual Private Cloud (VPC)', 0, 6),
(74, 'Use Amazon Cloud Directory', 0, 7),
(75, 'Audit AWS Identity and Access Management (IAM) roles', 0, 7),
(76, 'Enable multi-factor authentication', 1, 7),
(77, 'Enable AWS CloudTrail', 0, 7),
(78, 'AWS Trusted Advisor', 0, 8),
(79, 'AWS CloudTrail', 1, 8),
(80, 'AWS X-Ray', 0, 8),
(81, 'AWS Identity and Access Management (AWS IAM)', 0, 8),
(82, 'Amazon Simple Notification Service (Amazon SNS)', 1, 9),
(83, 'AWS CloudTrail', 0, 9),
(84, 'AWS Trusted Advisor', 0, 9),
(85, 'Amazon Route 53', 0, 9),
(86, 'AWS Trusted Advisor', 0, 10),
(87, 'AWS Identity and Access Management (IAM)', 0, 10),
(88, 'AWS Billing Console', 0, 10),
(89, 'AWS Acceptable Use Policy', 1, 10);

-- --------------------------------------------------------

--
-- Structure de la table `players`
--

DROP TABLE IF EXISTS `players`;
CREATE TABLE IF NOT EXISTS `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `score` int(11) NOT NULL,
  `ip` text COLLATE utf8mb4_bin NOT NULL,
  `os` text COLLATE utf8mb4_bin NOT NULL,
  `browser` text COLLATE utf8mb4_bin NOT NULL,
  `dateTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE IF NOT EXISTS `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` text COLLATE utf8mb4_bin NOT NULL,
  `explication` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`id`, `question`, `explication`) VALUES
(1, 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?', 'The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload'),
(2, 'Which AWS service would simplify the migration of a database to AWS?', 'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'),
(3, 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?', 'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.'),
(4, 'Which AWS networking service enables a company to create a virtual network within AWS?', 'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.'),
(5, 'Which of the following is an AWS responsibility under the AWS shared responsibility model?', 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.'),
(6, 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?', 'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide. '),
(7, 'How would a system administrator add an additional layer of login security to a users AWS Management Console?', 'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.'),
(8, 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?', 'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.'),
(9, 'Which service would be used to send alerts based on Amazon CloudWatch alarms?', 'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.'),
(10, 'Where can a user find information about prohibited actions on the AWS infrastructure?', 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. ');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
