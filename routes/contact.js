const express = require("express");
const contactRouter = express.Router();
const contactModel = require("../userModel/contactModel.js");

contactRouter
  .route("/")
  .get(contactGet)
  .post(contactPost);

function contactGet(req, res) {
  res.send("contact page");
}

async function contactPost(req, res) {
  try {
    const obj = req.body;
    const response = await contactModel.create(obj);
    console.log("response", response);
    res.status(201).json({
      message: "response data",
      data: response
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "post contact data error",
      err: err
    });
  }
}

console.log("http://localhost:3000/contact");
module.exports = contactRouter;
