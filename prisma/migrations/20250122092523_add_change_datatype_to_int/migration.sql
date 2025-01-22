/*
  Warnings:

  - The primary key for the `wp_posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID` on the `wp_posts` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `post_author` on the `wp_posts` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `post_parent` on the `wp_posts` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `comment_count` on the `wp_posts` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `wp_posts` DROP PRIMARY KEY,
    MODIFY `ID` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `post_author` INTEGER NOT NULL DEFAULT 0,
    MODIFY `post_parent` INTEGER NOT NULL DEFAULT 0,
    MODIFY `comment_count` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`ID`);
