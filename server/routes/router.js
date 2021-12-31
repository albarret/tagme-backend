const express = require("express");
const route = express.Router();
const recipiesController = require("../controller/recipies.controller");
const userController = require("../controller/user.controller");

// API

//Recipe
route.get("/api/recipies", recipiesController.find);

// User
route.post("/api/user", userController.find);

module.exports = route;
