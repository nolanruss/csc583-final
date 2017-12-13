# csc583-final: sign-in application
## Project Description
This is a simple front-end application intended to run on a mobile tablet, and communicate with
a back-end database.  This application will be used as a kiosk device to collect information on
visitors for a corporation.

## Plan of Action
 - [X] Nonfunctional analysis
 - [X] Architecture Design
 - [X] Architecture Discussion
 - [X] User interface Sketches
 - [X] Installation Instructions
 - [x] Implementation

## User Interface Description and Mock-up
### Visitor's View
__Description__: The Visitor's View displays a simple form, greeting the user and requesting the
user to sign-in. The following fields will be available for the user to enter data:
 * Name
 * Email
 * Telephone #
 * Company
 * Official visit (checkbox)
 * Escort required (checkbox)
 * Excort name (if Escort is required)

#### Mock-up of the Visitor's View
![Visitor's View](/mock-up/visitors_view.jpg)

## Admin View
__Description__: This view lists all the data entered by visitors as a table.

#### Mock-up of the Admin View
![Admin View](/mock-up/admin_view.JPG)

## System Architecture
A three tier client-server architecture was selected for the creation of this 
project, consisting of client, server, and data tiers.  The client tier presents
the appropriate interface to the user so that visitor information can be entered
or viewed.  The data tier is a database running on a server responsible for
storing and retrieving visitor information.  The server tier (middle tier), is 
responsible for system logic and routing communication between the client,
server, and data tiers. The client tier will ultimately be deployed on a tablet,
and the data and server tiers will be deployed on an intranet server.  Initial
deployment during development will occur locally on a laptop.

## Nonfunctional Requirements Analysis
The sign-in system requires a front-end framework for user interface implementation,
a back-end framework for managing routing and logic, a back-end run-time environment,
and finally, a database.  Various technologies were considered for deployment of the 
system.  In consideration of previous experience, and assessment of other web framework
technologies, a MEVN stack was selected as the best option for deployment of the system.
The MEVN stack consists of MongoDB, Express.js, Vue.js, and Node.js.  Their roles within
the system are listed below, along with the nonfunctional requirements of the system.
 
#### Nonfunctional Requirements
 * Front-end framework for UI implementation (Vue.js)
 * Back-end framework for routing and logic (Express.js)
 * Back-end run-time environment (Node.js)
 * Database (MongoDB)
 * Development environment (Linux, Ubuntu Xenial 16.04)
 * IDE (MS Visual Studio Code)
 

Technology | MEAN | Java Spring Boot | Python Django | MEVN | 
---------- | ---- | ---------------- | ------------- | ---- | 
Skills     | 3.0  | 2.0              | 2.0           | 4.0  | 
Features   | 4.5  | 2.5              | 2.5           | 5.0  | 
Constraints| 4.3  | 2.3              | 2.3           | 4.3  | 
Usability  | 4.0  | 2.8              | 2.3           | 4.0  | 
Support    | 4.3  | 2.5              | 2.5           | 5.0  | 
Security   | 3.5  | 2.8              | 2.8           | 3.5  | 
Simplicity | 3.5  | 2.3              | 2.0           | 4.0  | 
Average    | 3.9  | 2.6              | 2.3           | 4.3  | 


## Installation Instructions
[Installation Guide](/InstallGuide.md)