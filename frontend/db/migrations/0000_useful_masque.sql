CREATE TABLE `companies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`english_name` varchar(255),
	CONSTRAINT `companies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `company_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`description` text,
	`locale_id` int,
	`company_id` int,
	CONSTRAINT `company_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `employment_type_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`employment_type_id` int,
	`locale_id` int,
	CONSTRAINT `employment_type_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `employment_types` (
	`id` int AUTO_INCREMENT NOT NULL,
	`english_name` varchar(255),
	CONSTRAINT `employment_types_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `locales` (
	`id` int AUTO_INCREMENT NOT NULL,
	`english_name` varchar(255),
	`localized_name` varchar(255),
	`code` varchar(50),
	CONSTRAINT `locales_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `location_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`country` varchar(255),
	`province` varchar(255),
	`city` varchar(255),
	`location_id` int,
	`locale_id` int,
	CONSTRAINT `location_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `locations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`english_country` varchar(255),
	`english_province` varchar(255),
	`english_city` varchar(255),
	CONSTRAINT `locations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `project_tech_stacks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`project_id` int,
	`tech_stack_id` int,
	CONSTRAINT `project_tech_stacks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `project_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`description` text,
	`project_id` int,
	`locale_id` int,
	CONSTRAINT `project_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`english_name` varchar(255),
	`is_personal` boolean,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tech_stack_categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`english_name` varchar(255),
	CONSTRAINT `tech_stack_categories_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tech_stack_category_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`tech_stack_category_id` int,
	`locale_id` int,
	`name` varchar(255),
	CONSTRAINT `tech_stack_category_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tech_stacks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`image_url` varchar(500),
	`image_url_alt` varchar(500),
	`tech_stack_category_id` int,
	CONSTRAINT `tech_stacks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `work_experience_locales` (
	`id` int AUTO_INCREMENT NOT NULL,
	`work_experience_id` int,
	`locale_id` int,
	CONSTRAINT `work_experience_locales_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `work_experience_locations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`work_experience_id` int,
	`location_id` int,
	CONSTRAINT `work_experience_locations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `work_experience_projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`work_experience_id` int,
	`project_id` int,
	CONSTRAINT `work_experience_projects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `work_experience_tech_stacks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`work_experience_id` int,
	`tech_stack_id` int,
	CONSTRAINT `work_experience_tech_stacks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `work_experience_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`position_title` varchar(255),
	`description` text,
	`work_experience_id` int,
	`locale_id` int,
	CONSTRAINT `work_experience_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `work_experiences` (
	`id` int AUTO_INCREMENT NOT NULL,
	`company_id` int,
	`start_date` date,
	`end_date` date,
	`employment_type_id` int,
	`work_mode_id` int,
	CONSTRAINT `work_experiences_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `work_mode_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`work_mode_id` int,
	`locale_id` int,
	CONSTRAINT `work_mode_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `work_modes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`english_name` varchar(255),
	CONSTRAINT `work_modes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `company_translations` ADD CONSTRAINT `fk_ct_locale_id` FOREIGN KEY (`locale_id`) REFERENCES `locales`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `company_translations` ADD CONSTRAINT `fk_ct_company_id` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `employment_type_translations` ADD CONSTRAINT `fk_ett_employment_type_id` FOREIGN KEY (`employment_type_id`) REFERENCES `employment_types`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `employment_type_translations` ADD CONSTRAINT `fk_ett_locale_id` FOREIGN KEY (`locale_id`) REFERENCES `locales`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `location_translations` ADD CONSTRAINT `fk_lt_location_id` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `location_translations` ADD CONSTRAINT `fk_lt_locale_id` FOREIGN KEY (`locale_id`) REFERENCES `locales`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `project_tech_stacks` ADD CONSTRAINT `fk_pts_project_id` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `project_tech_stacks` ADD CONSTRAINT `fk_pts_tech_stack_id` FOREIGN KEY (`tech_stack_id`) REFERENCES `tech_stacks`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `project_translations` ADD CONSTRAINT `fk_pt_project_id` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `project_translations` ADD CONSTRAINT `fk_pt_locale_id` FOREIGN KEY (`locale_id`) REFERENCES `locales`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `tech_stack_category_translations` ADD CONSTRAINT `fk_tsct_tech_stack_cat_id` FOREIGN KEY (`tech_stack_category_id`) REFERENCES `tech_stack_categories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `tech_stack_category_translations` ADD CONSTRAINT `fk_tsct_locale_id` FOREIGN KEY (`locale_id`) REFERENCES `locales`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `tech_stacks` ADD CONSTRAINT `fk_ts_tech_stack_category_id` FOREIGN KEY (`tech_stack_category_id`) REFERENCES `tech_stack_categories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_locales` ADD CONSTRAINT `fk_wel_work_experience_id` FOREIGN KEY (`work_experience_id`) REFERENCES `work_experiences`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_locales` ADD CONSTRAINT `fk_wel_locale_id` FOREIGN KEY (`locale_id`) REFERENCES `locales`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_locations` ADD CONSTRAINT `fk_weloc_work_experience_id` FOREIGN KEY (`work_experience_id`) REFERENCES `work_experiences`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_locations` ADD CONSTRAINT `fk_weloc_location_id` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_projects` ADD CONSTRAINT `fk_wep_work_experience_id` FOREIGN KEY (`work_experience_id`) REFERENCES `work_experiences`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_projects` ADD CONSTRAINT `fk_wep_project_id` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_tech_stacks` ADD CONSTRAINT `fk_wets_work_experience_id` FOREIGN KEY (`work_experience_id`) REFERENCES `work_experiences`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_tech_stacks` ADD CONSTRAINT `fk_wets_tech_stack_id` FOREIGN KEY (`tech_stack_id`) REFERENCES `tech_stacks`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_translations` ADD CONSTRAINT `fk_wet_work_experience_id` FOREIGN KEY (`work_experience_id`) REFERENCES `work_experiences`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experience_translations` ADD CONSTRAINT `fk_wet_locale_id` FOREIGN KEY (`locale_id`) REFERENCES `locales`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experiences` ADD CONSTRAINT `fk_we_company_id` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experiences` ADD CONSTRAINT `fk_we_employment_type_id` FOREIGN KEY (`employment_type_id`) REFERENCES `employment_types`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_experiences` ADD CONSTRAINT `fk_we_work_mode_id` FOREIGN KEY (`work_mode_id`) REFERENCES `work_modes`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_mode_translations` ADD CONSTRAINT `fk_wmt_work_mode_id` FOREIGN KEY (`work_mode_id`) REFERENCES `work_modes`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `work_mode_translations` ADD CONSTRAINT `fk_wmt_locale_id` FOREIGN KEY (`locale_id`) REFERENCES `locales`(`id`) ON DELETE no action ON UPDATE no action;