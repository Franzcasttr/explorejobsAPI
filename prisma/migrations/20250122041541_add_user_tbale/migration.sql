-- CreateTable
CREATE TABLE `wp_user` (
    `id` VARCHAR(191) NOT NULL,
    `user_login` VARCHAR(191) NOT NULL,
    `user_pass` VARCHAR(191) NOT NULL,
    `user_nicename` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_url` VARCHAR(191) NOT NULL,
    `user_registered` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_activation_key` VARCHAR(191) NOT NULL,
    `user_status` INTEGER NOT NULL,
    `display_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
