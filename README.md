# Build A Storefront Backend
This is a backend API build in Nodejs for an online store. It exposes a RESTful API that will be used by the frontend developer on the frontend. 

### Running Ports 
The server Port is `3000` and the database port is `5432`


## Installation Instructions
To install all packages you need to run the following command:
`npm install`

## Set up Database
### Create Databases
We shall create the dev and test database.


- In psql run the following to create a user 
    - `CREATE USER reviewer WITH PASSWORD '1234';`
- In psql run the following to create the dev and test database
    - `CREATE DATABASE storefront;`
    - `CREATE DATABASE storefront_test;`

### Migrate Database
`db-migrate up`

## Testing
`npm run test`

## Enviromental Variables Set up
These are the environmental variables that needs to be set in a `.env` 
file.
```
POSTGRES_HOST = '127.0.0.1'
POSTGRES_DB ='storefront'
POSTGRES_TEST ='storefront_test'
POSTGRES_USER ='reviewer'
POSTGRES_PASSWORD ='1234'
ENV=dev
BCRYPT_PASSWORD=PASSWORD
SALT_ROUNDS=10
PEPPER=PEPPER-PASSWORD
TOKEN_SECRET=SECRET-TOKEN
```
## Start App
`npm run watch`



