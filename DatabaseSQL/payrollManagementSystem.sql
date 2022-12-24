create database payrollmanagementsystem;

use payrollmanagementsystem;

CREATE TABLE credentails(loginId INT NOT NULL PRIMARY KEY, pass VARCHAR(25));
CREATE TABLE employees(empid INT NOT NULL PRIMARY KEY, ename VARCHAR(25), designation VARCHAR(25), joindate DATE, basicSal decimal(9,2));
CREATE TABLE salaryStructure(empid INT NOT NULL PRIMARY KEY, hrAllowance decimal(9,2), dearnessAll decimal(9,2), professionalTax decimal(9,2), providentFund decimal(9,2), incentive decimal(9,2), medicalAll decimal(9,2));
CREATE TABLE timesheets(sheetId INT NOT NULL PRIMARY KEY, empid INT , workedHours INT, monthDate DATE);
CREATE TABLE performance(performanceSheetId INT NOT NULL PRIMARY KEY, empId INT, monthDate DATE, overTime INT, workingEff INT, teamEng INT, trainingComp INT, avgFeed INT, personalGrowth INT);

-- create salarySlip table using joins
