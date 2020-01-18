# Abacus Homes

An abacus for calculating monthly home cost.

The cost of owning a home is more than the mortgage.  So how can a potential home-owner safely and efficiently calculate the total impact to their monthly budget?  Why, with Abacus Homes of course!

 * <img... gif coming soome! />

## Start Here

To get AbacusHomes working on your machine you should... 

First, make sure you have:
```
  node.js
  mySql installed and running
  root user access to your machine
```

Then:
```
  fork this repo
  clone it to your local machine
```

Make sure you:
```
  either create mySql db named 'zobinHood' 
    OR 
  uncomment lines 29-32 in db/index.js (first few lines of buildPackage) for the first run
```

And **finally** we're ready to **get it running**:

*Starts the server & 'runs the code'* 
```
 npm run server
``` 
 
## Using the Abacus

Navigate to:
```
localhost:3004
```

Then...
<img... gif 'tutorial' coming soon! />

 - - - 

## Built With
 * ReactJS
 * styled-components
 * MySQL
 * Express.js
 * Node.js
 * Faker.js
 * Webpack/Babel

 - - - 

## Project Roadmap 

While this version is standalone AbacusHomes was built intentionally following TDD and SOA principles to allow integration with other projects.  Here's a peek into that process: 

#### Phase One:
Create the Abacus; a fully interactive client-side rendered micro-service containing the following user editable fields: 
    * Principal & Interest
    * Mortgage insurance
    * Property taxes
    * Home insurance
    * HOA fees
    * Utilities

#### Phase Two:
 * Optimize the production bundle and host on S3. [Dockerize the Abacus](https://hub.docker.com/repository/docker/itsord/morehomes) and deploy on Amazon EC2 t2 micros.

#### Phase Three: 
 * Integrate AbacusHomes with 4 other microservices and serve up a full-functionality open source home purchasing web application.  [SEE THE PROXY PROJECT REPO HERE](https://github.com/1021s/Matthew-proxy)


 - - - 


### Author
 * Matthew Beckerleg - [github.com/itsOrD](github.com/itsOrD)
 
### License
 * This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
 
