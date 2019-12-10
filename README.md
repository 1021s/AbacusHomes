# Matthew-service
*Monthly Cost*

This repository contains Matthew's module for the **Hack Reactor Senior Front End Capstone** project *(FEC)*; emulating a 'product page' from Zillow.  All work is original and from scratch using mySql, Webpack, Babel, and Javascript (React, Node, Express, StyledComponents etc).

# How to run the module: 
 * ensure you have a root user and a running mysql (or change the settings in db/index.js)
 * no need to run seed
 * either create mySql db named 'zobinHood' OR uncomment lines 29-32 in db/index.js (first few lines of buildPackage) for the first run

 * server: npm run server
 * url: localhost:3004


# Phase One: 
  Create a custom "Monthly Cost" stateful module following TDD and service-oriented architecture principles containing the following inner components (each containing their own child-components): 
  * Principal & Interest
  * Mortgage insurance
  * Property taxes
  * Home insurance
  * HOA fees
  * Utilities

# Phase Two: 
  Integrate components and styling with group members modules via a Proxy/App server.

# Phase Three: 
  Deploy on AWS or Heroku or...
