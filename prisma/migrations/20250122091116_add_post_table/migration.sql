-- CreateTable
CREATE TABLE `wp_posts` (
    `ID` BIGINT NOT NULL AUTO_INCREMENT,
    `post_author` BIGINT NOT NULL DEFAULT 0,
    `post_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `post_date_gmt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `post_content` VARCHAR(191) NOT NULL,
    `post_title` VARCHAR(191) NOT NULL,
    `post_excerpt` VARCHAR(191) NOT NULL,
    `post_status` VARCHAR(191) NOT NULL DEFAULT 'publish',
    `comment_status` VARCHAR(191) NOT NULL DEFAULT 'open',
    `ping_status` VARCHAR(191) NOT NULL DEFAULT 'open',
    `post_password` VARCHAR(191) NOT NULL DEFAULT '',
    `post_name` VARCHAR(191) NOT NULL DEFAULT '',
    `to_ping` VARCHAR(191) NOT NULL,
    `pinged` VARCHAR(191) NOT NULL,
    `post_modified` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `post_modified_gmt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `post_content_filtered` VARCHAR(191) NOT NULL,
    `post_parent` BIGINT NOT NULL DEFAULT 0,
    `guid` VARCHAR(191) NOT NULL DEFAULT '',
    `menu_order` INTEGER NOT NULL DEFAULT 0,
    `post_type` VARCHAR(191) NOT NULL DEFAULT 'post',
    `post_mime_type` VARCHAR(191) NOT NULL DEFAULT '',
    `comment_count` BIGINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
