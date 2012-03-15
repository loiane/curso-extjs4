CREATE SCHEMA IF NOT EXISTS `cursoextjs4` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `cursoextjs4` ;

-- -----------------------------------------------------
-- Table `cursoextjs4`.`Contato`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `cursoextjs4`.`Contato` (
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(45) NOT NULL ,
  `email` VARCHAR(45) NULL ,
  PRIMARY KEY (`ID`) )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Data for table `cursoextjs4`.`Contato`
-- -----------------------------------------------------
SET AUTOCOMMIT=0;
USE `cursoextjs4`;
INSERT INTO `cursoextjs4`.`Contato` (`ID`, `nome`, `email`) VALUES ('1', 'Loiane', 'contato@loiane.com');
INSERT INTO `cursoextjs4`.`Contato` (`ID`, `nome`, `email`) VALUES ('2', 'CursoExtJS 4', 'curso@extjs4.com');

COMMIT;
