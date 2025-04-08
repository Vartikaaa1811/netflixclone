//import express from "express";
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World bitch");
});
app.get("/profile", (req, res) => {
  res.send("Hello World bitch route 2");
});

app.get("/contact", (req, res) => {
  res.send("Hello World bitch route 3");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
//app.listen(5000);
