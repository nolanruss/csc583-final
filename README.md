# csc583-final: sign-in application
## Project Description
This is a simple front-end application intended to run on a mobile tablet, and communicate with
a back-end database.  This application will be used as a kiosk device to collect information on
visitors for a corporation.

## Plan of Action
 - [ ] Nonfunctional analysis
 - [ ] Architecture Design
 - [ ] Architecture Discussion
 - [X] User interface Sketches
 - [ ] Installation Instructions

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
### Architecture Design
A three tier client-server architecture was selected for the creation of this 
project, consisting of client, server, and data tiers.  The client tier presents
the appropriate interface to the user so that visitor information can be entered
or viewed.  The data tier is a database running on a server responsible for
storing and retrieving visitor information.  The server tier (middle tier), is 
responsible for system logic and routing communication between the client,
server, and data tiers. The client tier will ultimately be deployed on a tablet,
and the data and server tiers will be deployed on an intranet server.

### Discussion of Technologies
Selection of the technologies required multiple considerations.  The sign-in system
requires a front-end framework for user interface implementation, a back-end
framework for managing routing and logic, a back-end run-time environment, and
finally, a database.  Various technologies were considered for deployment of the system.


## Installation Instructions
