const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const hosting = "0.0.0.0";

// Middleware
app.use(bodyParser.json());

const corsOptions = {
    origin: "https://anas-portfolio-42hj.onrender.com"
};
app.use(cors(corsOptions));

// Database CONNECTION
const dbConnection = require("./dbConection.js");

// ROUTES
const contactRouter = require("./routes/contact.js");
app.use("/contact", contactRouter);

// SERVER
const server = http.createServer(app);
server.listen(port, hosting, () => {
    console.log(`Server running at http://${hosting}:${port}/`);
});
