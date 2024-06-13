const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

const corsOptions = {
    origin: "http://localhost:5173"
};
app.use(cors(corsOptions));

// Database CONNECTION
const dbConnection = require("./dbConection.js");

// ROUTES
const contactRouter = require("./routes/contact.js");
app.use("/contact", contactRouter);

// SERVER
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
