-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema campingdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `campingdb` ;

-- -----------------------------------------------------
-- Schema campingdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `campingdb` DEFAULT CHARACTER SET utf8 ;
USE `campingdb` ;

-- -----------------------------------------------------
-- Table `camping`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `camping` ;

CREATE TABLE IF NOT EXISTS `camping` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NULL,
  `date` DATETIME NULL,
  `distance` DOUBLE NULL,
  `price` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS campinguser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'campinguser'@'localhost' IDENTIFIED BY 'campinguser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'campinguser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `camping`
-- -----------------------------------------------------
START TRANSACTION;
USE `campingdb`;
INSERT INTO `camping` (`id`, `name`, `location`, `date`, `distance`, `price`) VALUES (1, 'Fireball', 'Yosemite', '2022-08-28', 996.7, 150);

COMMIT;

