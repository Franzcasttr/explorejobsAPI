/*
  Warnings:

  - A unique constraint covering the columns `[user_email]` on the table `wp_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `wp_user_user_email_key` ON `wp_user`(`user_email`);
