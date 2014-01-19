CREATE SCHEMA IF NOT EXISTS `sencha` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `sencha` ;

-- -----------------------------------------------------
-- Table `sencha`.`Contact`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `sencha`.`Contact` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL ,
  `email` VARCHAR(45) NULL ,
  PRIMARY KEY (`ID`) )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `sencha`.`Contact`
-- -----------------------------------------------------
SET AUTOCOMMIT=0;
USE `sencha`;
INSERT INTO `sencha`.`Contact` (`ID`, `name`, `email`) VALUES ('1', 'Contact1', 'contact1@email.com');
INSERT INTO `sencha`.`Contact` (`ID`, `name`, `email`) VALUES ('2', 'Contact2', 'contact2@email.com');

COMMIT;
