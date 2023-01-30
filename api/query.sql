CREATE DATABASE todo;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,

    CONSTRAINT id_pk PRIMARY KEY(id)
);

INSERT INTO TABLE users (`id`,`full_name`,`email`) VALUES(`1`,`Abu Siam`,`abusiam.dev@gmail.com`); --did not work
INSERT INTO users (`id`,`full_name`,`email`) VALUES(1,'Abu Siam','abusiam.dev@gmail.com'); --did work in phpmyadmin mysql

CREATE TABLE tasks(
    id INT NOT NULL AUTO_INCREMENT,
    text_body TEXT NOT NULL,
    user_id INT NOT NULL
    -- created_at DATETIME DEFAULT NOT(), does not work
    ALTER TABLE `tasks` CHANGE `created_at` `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP; 

    CONSTRAINT taskid_pk PRIMARY KEY(id),
    CONSTRAINT userid_fk FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO tasks(`id`,`text_body`,`user_id`) VALUES
  (1,'Ryzen 5 3600',1);

INSERT INTO tasks(`text_body`,`user_id`) VALUES
  ('Rx580'1);