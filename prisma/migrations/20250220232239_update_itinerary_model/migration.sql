/*
  Warnings:

  - You are about to drop the `itinerary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `itinerary`;

-- CreateTable
CREATE TABLE `Itinerary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `destination` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `total_days` INTEGER NOT NULL,
    `day` INTEGER NOT NULL,
    `activity` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
