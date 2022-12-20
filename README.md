# Payroll Management System

## Document: System Requirement Specification Document

### Title:

System Requirement Specification for Payroll Management

### Team:
- Direct Customer
- In-house Staff
- Visiting Staff
- Architect
- Business Analyst
- Quality Assurance Team
- System Analyst

### Objective (Purpose):
The Online Payroll management system for calculation of salary as per policy,
income tax calculations and various deductions to be done from salary including 
statutory deductions  like Income tax  and  provident  fund  deductions. 
It  has  to generate  pay-slip, cheque summary and MIS reports.

### Scope:
This application works in Multiple PC’s having browser installed 
on multiple Computers but sharing same database by which users of 
different department can use it sitting at different locations simultaneously.
  But in future we can make the Application where the database will 
be hosted in order to manage the all departments which will be located
 in different places and by keeping domain of Application as Online.


### Definations
- QA:  Quality Assurance
- Portal: Peronalized Online Web Application
- MIS: Management Information System
- BI: Business Intelligence
- KPI: Key Perfomornace Indicators
- BOD: Board of Directors
- ERM: Employee Relation Management
- Dashboard: Personalized information presented using BI techniques such as grid, score card, graph, KPI


### Functional Requirements :
		
	- BOD will get generated reports on dashboard about salary disbursements.

	- Manager dashboard will have data related to employee performance and timesheet which will be sent to HR department for salary disbursement.

	- Manager will have authority to hold and approve the salary of the employees.

	- Manager will send performance data and allowances data of respective employee to HR Department.

	- HR will calculate PF, Income Tax and ESI of the respective employee.

	- HR will calculate the salary amount based on the timesheet and other variables for salary.

	- HR will make decisions based on the data whether to disburse the salary or hold the salary.

	- After Aproval of disbursement the data will be sent to banking department and the funds will be disbursed.

	- Employee will be able to view salary history and current month salary status.

	- Employee will be able to download salary slips.

	- Employee can raise complain if there is any issues on salary disbursement i.e. if the amount is not recieved and the status says recieved or any other related issues.




### Non-Functional Requirements :
  #### Security
	  Each stakeholder will be to access system  through authentication process. Who are you ?
	  System will provide access to  the content , operations using Role based security (Authorization) (Permissions based on Role)
	  Using SSL in all transactions  which will be performed by stakeholder. It would protect confidential information shared by system to stakeholder.
	  System will automatically lock accounts of all stakeholder after inactiveness or resignation.
	  System will block operations for inactive  stakeholder and would redirect for authentication.
	  System  will internally maintain secure communiction channel between Servers ( Web Servers, App Servers, databse Server)
	  Sensitive data will be always encrypted across communcation.
	  User proper firewall to protect servers from out side fishing, velnerable attacks.

  #### Reliability
	  The system will backup business data on regular basis and recover in short time duration to keep system operational
	  Continous updates are matained , continous Adminstration is done to keep system operational.
	  During peak hours system will maintain same user experaince by managing load balacning .

  #### Availability
	  uptime:   24* 7  available
	  99.999%

  #### Maintainability:
	  A Commercial database software will be used to maintain System data Persistence.
	  A readymade Web Server will be installed to host Payroll portal (Web Site) to management server capabilities.
	  IT operations team will easily monitor and configure System using Adminstrative tools provided by Servers.
	  Separate enviornment will be maintained for system for isolation in  production, testing, and development.

  #### Accessibility:
	  Only registered staff will be able to access after authentication.
	  BOD team will be able to view daily, weekly, monthly, annual businss Growth through customized dashboard.


  #### Durability:
	  System will implement backup and recovery for retaining stake holders data, bussiness operation data and business data over time.

  #### Efficiency:
	  on salary rollout day, maximum number of transctions  will take place,
	  system will be able to manage all transactions with isolation.

  #### Modularity:
	  System will be designed and developed using reusable, independent or dependent business senarios in the form of modules.
	  These modules will be loosely coupled and highly cohesive.
	  System will contain ERM , payment processing and Roles managment modules.

  #### Scalability:
	  System will be able  to  provide  consistent user exeprience to stake holder as well as vistors irrespective of load.

  #### Safety:
	  Payroll portal will be secure from malicious attack.
        Payroll portal functionalilites are protected from outside with proper firewall configuration.
	  Payroll portal will be always kept updated with latest anit virus software.
	  Bussiness data will be backed up periodically to ensure safty of data using increamental back up strategy.
	  Role based security will be applied for Application data and operations accessibility.
