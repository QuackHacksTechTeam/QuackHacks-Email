## THIS IS HOW WE ARE GOING TO SEND EMAILS TO THE MASSES

## Enviornment
this should be in your .env file

- PORT=Port you want the server to run on, e.g. 3000 
- HOST=localhost
- LOCAL_DB_HOST=localhost
- LOCAL_DB_PORT=Whatever port your database is running on, probably 3306
- LOCAL_DB_USER=Username to your database
- LOCAL_DB_PASSWORD=Password to your database
- DB_NAME=Name of the database
- EMAIL_USER=Email to send from (note this probaly won't ever need to change check website doc to find email & passowrd)
- EMAIL_PASS=Email password

## What to Install
just run 
```bash
npm install
```
to get all needed installs

IF THAT FOR SOME REASON DOES NOT WORK YOU COULD TRY ONE BY ONE:
```bash
npm install nodemailer
npm install dotenv
npm install --save-dev typescript ts-node @types/node
npm install --save-dev @types/nodemailer
npm install mysql2
```

## TO RUN

first run:
```bash
npx tsc
```
then run:
```bash
node dist/index.js
```