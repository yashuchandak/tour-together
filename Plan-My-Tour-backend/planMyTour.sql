-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 18, 2023 at 02:21 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `planMyTour`
--

-- --------------------------------------------------------

--
-- Table structure for table `cred`
--

CREATE TABLE `cred` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `emailid` varchar(40) NOT NULL,
  `password` varchar(20) NOT NULL,
  `photo` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cred`
--

INSERT INTO `cred` (`id`, `username`, `emailid`, `password`, `photo`) VALUES
(1, 'yashd', 'yashd@gmail.com', 'yashd1', ''),
(2, 'nishadk', 'nishadk@gmail.com', 'nishadk1', ''),
(3, 'nayanb', 'nayanb@gmail.com', 'nayanb1', ''),
(4, 'yashc', 'chandakyash41@gmail.com', 'yashc1', 0x89504e470d0a1a0a0000000d4948445200000019000000190806000000c4e985630000000473424954080808087c0864880000001974455874536f66747761726500676e6f6d652d73637265656e73686f74ef03bf3e00000030744558744372656174696f6e2054696d65004d6f6e646179203330204a616e7561727920323032332031313a34373a313820504de4ffd0db00000029494441544889edcd3101000008c3b0829ef9b7072af6350632498eb26d07262626262626262626003ce56601b5fad9ecd80000000049454e44ae426082),
(5, 'jayrajc', 'jayrajc@gmail.com', 'jayrajc1', 0x89504e470d0a1a0a0000000d4948445200000019000000190806000000c4e985630000000473424954080808087c0864880000001974455874536f66747761726500676e6f6d652d73637265656e73686f74ef03bf3e00000030744558744372656174696f6e2054696d65004d6f6e646179203330204a616e7561727920323032332031313a34373a313820504de4ffd0db00000029494441544889edcd3101000008c3b0829ef9b7072af6350632498eb26d07262626262626262626003ce56601b5fad9ecd80000000049454e44ae426082),
(6, 'adityam', 'adityam@gmail.com', 'adityam1', ''),
(7, 'gouravb', 'gouravbangad1@gmail.com', 'gouravb1', 0x89504e470d0a1a0a0000000d4948445200000019000000190806000000c4e985630000000473424954080808087c0864880000001974455874536f66747761726500676e6f6d652d73637265656e73686f74ef03bf3e00000030744558744372656174696f6e2054696d65004d6f6e646179203330204a616e7561727920323032332031313a34373a313820504de4ffd0db00000029494441544889edcd3101000008c3b0829ef9b7072af6350632498eb26d07262626262626262626003ce56601b5fad9ecd80000000049454e44ae426082);

-- --------------------------------------------------------

--
-- Table structure for table `guides`
--

CREATE TABLE `guides` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `city` varchar(50) NOT NULL,
  `languages` varchar(100) NOT NULL,
  `insta_username` varchar(50) NOT NULL,
  `fees` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `guides`
--

INSERT INTO `guides` (`id`, `username`, `name`, `mobile`, `city`, `languages`, `insta_username`, `fees`) VALUES
(1, 'yashd', 'Yash Dhoot', '9834196609', 'Shegaon', 'English, Hindi, Marathi, Spanish', 'yash_dhoot', '500 per hour'),
(7, 'gouravb', 'Gourav Bangad', '8010141455', 'Ichalkaranji', 'Hindi, English', '', '400 per hour');

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `plan_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `start_place` varchar(50) NOT NULL,
  `tour_place` varchar(50) NOT NULL,
  `travel_means` varchar(50) NOT NULL,
  `likes` int(11) NOT NULL,
  `tour_duration` int(2) NOT NULL,
  `details` varchar(2000) NOT NULL,
  `advice` varchar(500) NOT NULL,
  `cost_per_person` varchar(20) NOT NULL,
  `date` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`plan_id`, `user_id`, `username`, `start_place`, `tour_place`, `travel_means`, `likes`, `tour_duration`, `details`, `advice`, `cost_per_person`, `date`) VALUES
(1, 1, 'yashd', 'Shegaon', 'Mumbai', 'Train', 15, 3, 'Day 1 : Imagica (water park)\r\nDay 2 : juhu beach , Gateway of India \r\nDay 3 : Chhatrapati Shivaji Terminus , marine Drive ,Shree Siddhivinayak', '', '', '2023-2-8'),
(2, 2, 'nishadk', 'Ichalkaranji', 'Mahabaleshwar', 'Bus', 8, 3, 'Day 1: start at 10 am visit old mahabaleshwar temple and mapro garden \r\nDay 2: visit Venna lake and mscw church\r\nDay 3: market shopping and Amul\'s factory\r\nEnd at 8 pm', 'Carry Power bank,2000 per head', '2000', '2023-3-12'),
(3, 3, 'nayanb', 'Pune', 'Mumbai', 'Train', 44, 1, 'Day1: started at 11am from csmt. First sebi building (just outer view), gateway of india, hotel taj (just outer view), then Jahangir art gallery. The above places were covered by walking. Then Planetarium, Hanging Garden, and finally girgsaon chowpatty in evening. Had Dinner at giragaon chowpatty (okay-okay food). Then back to Pune at night', '', '700', '2023-3-16'),
(4, 6, 'adityam', 'Panvel', 'Goa', 'Train', 68, 4, 'DAY 1 :GOA ARRIVAL\nPickup from airporttransfer to hotel, at evening free for leisure, after dinner Overnight stay at hotel. \nDAY 2: SOUTH GOA SIGHTSEEING\nMorning after breakfast go for full day sightseeing tour to south Goa. Overnight stay at hotel.\nSIGHT SEEING TOUR: SOUTH GOA\n# Miramar Beach: A lovely golden beach of soft sand girdled with palm rees’ facing the blue Arabian Sea is the capital of Goa, Panajim. Here lies the Samadhi of Goa’s first Chief Minister.\n# Dona Paula, an idyllicpicturesque spot. Command a fine view of Zuari River and Marmagoa harbor. Waterscooter facilities are Available here.\n# Bom Jesus of Basilica:(Old Goa Church) Built in 16th Century is the Most famous church in Goa. Themortal remains of St. Francis Xavier, Kept in the Silver casket, are enriched here.\n# Mangueshi Temple:Dedicated to lord Shiva, being built in the 17th Century.\nDAY 3: NORTH GOA SIGHTSEEING\nMorning after breakfast full day sightseeing of North Goa.\nSIGHT SEEING TOUR OF NORTH GOA\n# Calangute Beach: Widely known as Queen of Goa’s Beaches. Here Holidays and beat shows draw hundreds of people.\n# Vagator Beach: A beach famous for its seclusion with the chapora Fort as its imposing backdrop.\n# Anjuna Beach: very popular among the foreigners and is beautiful Picnic spot.\n# Fort Aguada: Built by the Portuguese in 1609-1612 to command the Entry into the river Mondovi inorder to protect old Goa for enemy Attack. Fort houses presently the Central jail. A lighthouse is situated Nearby.\nDAY 4 DEPARTURES FROM GOA\nMorning after breakfast drop according to train or flight timing.', '', '5000', '2023-4-3'),
(5, 4, 'yashc', 'Pune', 'Chennai', 'Flight', 0, 4, 'Day 1 : reached Chennai 3 am in the morning. Took a cab went to one of the relatived residing in Chennai. It took nearly 2.5 hrs to reach their residence from airport. Had a breakfast and started at 10 am from Kattankulathur. That day I booked a bus for  casual city tour. A zoo, light house , Marina beach etc. Day 2 : visited mahabalipuram 56 km from Chennai. Day 3 : visited pondicherry 150 km from Chennai. Day 4 : had a great shopping at kanchipuram sarees which is merely 74 km from chennai', 'If you are a roti lover than its a tough call as its hard to get it there.but yeah you can order customize delivery for your meals.', '3000', '2023-4-17'),
(6, 4, 'yashc', 'Akola', 'Udaipur', 'Train', 0, 3, 'Day1 reached udaipur, visited car museum,had dinner by lake\r\nDay 2 witness sunrise had lunch and went Fateh Sagar Lake . Did some site seeing.\r\nDay 3 woke up late did some shopping witness sunset . \r\nBack to akola', 'Carry warm clothes\r\nMedicine\r\nTry to travel with local transport ', '4000', '2023-4-18'),
(7, 5, 'jayrajc', 'Kolhapur', 'Dandeli', 'Bus', 0, 3, 'Day 1 : Imagica (water park)\r\nDay 2 : juhu beach , Gateway of India \r\nDay 3 : Chhatrapati Shivaji Terminus , marine Drive ,Shree Siddhivinayak', '', '1500', '2023-4-18'),
(8, 2, 'nishadk', 'Pune', 'Sambhajinagar', 'Train', 0, 3, 'Day1: ajantha caves by walking , then at arround 2 pm lunch at Hotel , then went to verul caves travelling by Bus through Jungle reach to kailash temple ,8 PM return to Hotel Dinner and rest \nDay 2: around 6 am went to Daultabad Fort , had Breakfast , Trek , Museum , old monuments , Way to shirdi on route shanishingnapur Temple \nDay 3 : return back to Home ', 'Carry as much as possible', '2000', '2023-4-18'),
(9, 4, 'yashc', 'Pune', 'Visapur Fort', 'Train', 2, 1, 'Day 1: Took a local from shivajinagar to malvali station (54 Kms). Reached malvali station around 10 am. \nHad some breakfast (vadapav / chai) nearby railway station. Then reached visapur fort by walking (30 mins). \nStarted our trek. [One  of the best trek places I have ever visited]\nOurs was around 4 hours of trek . \nTook train back to Pune at around 5pm.   \n', 'go in light monsoon season, the rain is amazing. Carry basic first aid.', '300', '2023-4-18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cred`
--
ALTER TABLE `cred`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`,`emailid`);

--
-- Indexes for table `guides`
--
ALTER TABLE `guides`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`,`mobile`,`insta_username`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`plan_id`),
  ADD KEY `username` (`username`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cred`
--
ALTER TABLE `cred`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `plan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `guides`
--
ALTER TABLE `guides`
  ADD CONSTRAINT `guides_ibfk_1` FOREIGN KEY (`id`) REFERENCES `cred` (`id`),
  ADD CONSTRAINT `guides_ibfk_2` FOREIGN KEY (`username`) REFERENCES `cred` (`username`);

--
-- Constraints for table `plans`
--
ALTER TABLE `plans`
  ADD CONSTRAINT `plans_ibfk_1` FOREIGN KEY (`username`) REFERENCES `cred` (`username`),
  ADD CONSTRAINT `plans_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `cred` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
