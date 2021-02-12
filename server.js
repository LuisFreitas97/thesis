import express from 'express';
import bodyParser from 'body-parser';
import cors  from "cors";
import {router} from './app/routes/web.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});*/

app.use('/',router);


// set port, listen for requests
const PORT = process.env.SERVICE_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});