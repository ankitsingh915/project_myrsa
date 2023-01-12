show databases;

create database studentDB;

use studentDB;

create table studentList(Id_no int(50), Name varchar(100), Mobile_no bigint(100), Address varchar(100));

show tables;

insert into studentList values(101, "Owais", 7896541236, "NalaSopara"),
							  (102, "Yashashree", 8564541236, "Villa Parle"),
                              (103, "Sagar", 7123541236, "Andheri"),
                              (104, "Vishal", 9646541236, "Ghatkopar"),
                              (105, "Soham", 9746841236, "Andheri");
                              
select * from studentList;                              


update studentList set Address="Versova" where Name="sagar";

delete from studentList where Name="Vishal";


-- drop table studentList;