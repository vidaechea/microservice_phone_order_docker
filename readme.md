# Service 1

- Receives and order that contains the customer information name, surname, and email, and the list of phones that the customer wants to buy.
- Calculate the total prices of the order. 
- Log the final order to the console.

## Requirements:

- It should have test.
- It should be documented in the readme file.
- It should be a REST API
- Docker oriented.
- Microservice approach.
- Database access from the microservices.
- NodeJS

### Installing

There are the commands i use:

- npm init --yes
- npm i express body-parser mongoose morgan cors
- npm install

### Running

- docker build -t capitole_consulting_service_2 .
- docker run -p 49161:8080 capitole_consulting_service_2

### Running

You can use a Postman or another service to return a POST call with this params: 

name: 'xxxxx',
surname: 'xxxxx'
email: 'xxxxx',
phone_list: Teminal 1,Terminal 2 (Separated by comma)

and it returns the order (log)

http://localhost:49161/


This example has been done on a mac so you must run it on a mac, so that the docker environment variable works correctly

##### Important

You need access to the first service and create the database in mongodb





## Authors

* **Luis Vidaechea** - [Portfolio](https://github.com/vidaechea) - vidaechea.luis@gmail.com
