-- -----------------------------------------------------
-- Table `loiane_6`.`Contato`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `loiane_6`.`Contato` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(45) NOT NULL ,
  `email` VARCHAR(45) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;# MySQL returned an empty result set (i.e. zero rows).


-- -----------------------------------------------------
-- Data for table `loiane_6`.`Contato`
-- -----------------------------------------------------
SET AUTOCOMMIT=0;# MySQL returned an empty result set (i.e. zero rows).

USE `loiane_6`;# MySQL returned an empty result set (i.e. zero rows).

INSERT INTO `loiane_6`.`Contato` (`id`, `nome`, `email`) VALUES ('1', 'Loiane', 'contato@loiane.com');# 1 row(s) affected.

INSERT INTO `loiane_6`.`Contato` (`id`, `nome`, `email`) VALUES ('2', 'CursoExtJS 4', 'curso@extjs4.com');# 1 row(s) affected.


COMMIT;# MySQL returned an empty result set (i.e. zero rows).
