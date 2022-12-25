create database payrollmanagementsystem;
use payrollmanagementsystem;

CREATE TABLE credentials(
loginId INT NOT NULL PRIMARY KEY, 
pass VARCHAR(25));
insert into credentials values(1,"ab1@AB");
insert into credentials values(2,"cd2@CD");
insert into credentials values(3,"ef3@EF");
insert into credentials values(4,"gh4@GH");
insert into credentials values(5,"ij5@IJ");


CREATE TABLE employees(
empid INT NOT NULL PRIMARY KEY,
 ename VARCHAR(25),
 designation VARCHAR(25),
 joindate DATE, 
 basicSal decimal(9,2),
 constraint empid_fk1 foreign key(empid) references credentials(loginId) );

insert into employees values(1, 'pritam chavan','java trainer','2022-02-01',90000);
insert into employees values(2, 'suraj jadhvar','.net trainer','2022-08-02',80000);
insert into employees values(3, 'jayesh gangurde','deops trainer','2021-01-01',100000);
insert into employees values(4, 'prajwal patil','sql trainer','2021-12-01',95500);
insert into employees values(5, 'Utkarsh Upadhyay','dsa trainer','2022-02-01',5500);



CREATE TABLE timesheets(
sheetId INT NOT NULL PRIMARY KEY,
 empid INT, 
 workedHours INT,
 monthDate DATE,
 constraint empid_fk2 foreign key(empid) references employees(empid));

insert into timesheets values(201,1,12,"2021-10-01");
insert into timesheets values(202,2,10,"2021-12-01");
insert into timesheets values(203,3,14,"2021-11-01");
insert into timesheets values(204,4,16,"2022-10-01");
insert into timesheets values(205,5,13,"2021-05-05");


CREATE TABLE performancesheets(
performanceSheetId INT NOT NULL PRIMARY KEY,
empId INT,
monthDate DATE,
overTime INT, 
workingEff INT, 
teamEng INT, 
trainingComp INT, 
avgFeed INT, 
personalGrowth INT,
constraint empid_fk3 foreign key(empid) references employees(empid));

insert into performancesheets values(1,1,"2000-01-01",1,2,3,4,3,5);
insert into performancesheets values(2,2,"2005-05-04",2,2,5,1,1,5);
insert into performancesheets values(3,3,"2000-05-01",1,2,3,4,3,2);
insert into performancesheets values(4,4,"2022-01-18",1,2,5,2,3,5);
insert into performancesheets values(5,5,"2021-01-01",1,1,3,2,3,5);



CREATE TABLE salaryStructures(
empid INT NOT NULL,
salarySlipId int not null, 
hrAllowance decimal(9,2), 
dearnessAll decimal(9,2),
 professionalTax decimal(9,2),
 providentFund decimal(9,2), 
 incentive decimal(9,2), 
 medicalAll decimal(9,2),
 constraint empid_salarySlipId_pk primary key(empid,salarySlipId),
 constraint empid_fk4 foreign key(empid) references employees(empid),
 constraint ssi_fk foreign key(salarySlipId) references salarySlip(salarySlipId));
 
 
 insert into salaryStructures values(1,1,4000,3000.5,1000,5000,6000.2,4000.3);
insert into salaryStructures values(2,2,2000,1000.5,3000,2000,3000.2,6000.3);
insert into salaryStructures values(3,3,4000,3000.5,1000,5000,6030.2,2000.3);
insert into salaryStructures values(4,4,4040,3000.5,1000,5040,6060.2,4000.3);
insert into salaryStructures values(5,5,4080,3700.5,1000,5700,6700.2,4000.3);




CREATE TABLE bankdetails(empid INT ,
 accountNo int not null primary key,
 ifscCode varchar(40),
 branchName varchar(50),
 constraint empid_fk5 foreign key(empid) references employees(empid));


insert into bankdetails values
(1,123456789,'sbi00003404','ambejogai'),
(2,987456321,'sbi00004212','wagholi'),
(3,423957165,'sbi00007412','nashik'),
(4,456133892,'hdfc0000222','chakan'),
(5,456133811,'sbi0000111','mathura');



create table salarySlip(
salarySlipId int not null primary key,
empid int,
disbursementStatus boolean,
totalAmount decimal(7,2),
disbursementDate date,
constraint empid_fk6 foreign key(empid) references employees(empid));


insert into salarySlip values(1,1,true,70000,"2021-01-02");
insert into salarySlip values(2,2,true,20000,"2021-02-02");
insert into salarySlip values(3,3,true,30000,"2022-03-02");
insert into salarySlip values(4,4,true,50000,"2021-04-02");
insert into salarySlip values(5,5,true,60000,"2021-05-02");


delimiter $$
create procedure displaySalarySlip(in psalarySlipId int)
begin
select ss.empid,ss.salarySlipId,hrAllowance,dearnessAll, professionalTax, providentFund, incentive, medicalAll, disbursementStatus, totalAmount, disbursementDate from salaryStructures ss,salarySlip sl
where ss.salarySlipId=psalarySlipId and sl.salarySlipId=psalarySlipId;
end $$
delimiter ;
call displaySalarySlip(1);

