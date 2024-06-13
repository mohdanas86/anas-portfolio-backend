const mongoose = require("mongoose");

const url = "mongodb+srv://anas:anas@food.t6wubmw.mongodb.net/foodApp?retryWrites=true&w=majority&appName=food";

const dbConnection = mongoose.connect(url)
    .then(db => console.log("Db Connected....."))
    .catch(err => console.log(err));

module.exports = dbConnection;