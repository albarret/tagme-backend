const express = require("express");
const route = express.Router();
const assetController = require("../controller/asset.controller");
const companyController = require("../controller/company.controller");
const unitController = require("../controller/unit.controller");
const userController = require("../controller/user.controller");

// API

//Asset
route.post("/api/asset", assetController.create);
route.get("/api/asset", assetController.find);
route.put("/api/asset/:id", assetController.update);
route.delete("/api/asset/:id", assetController.delete);

//Company
route.post("/api/company", companyController.create);
route.get("/api/company", companyController.find);
route.put("/api/company/:id", companyController.update);
route.delete("/api/company/:id", companyController.delete);

//Unit
route.post("/api/unit", unitController.create);
route.get("/api/unit", unitController.find);
route.put("/api/unit/:id", unitController.update);
route.delete("/api/unit/:id", unitController.delete);

// User
route.post("/api/user", userController.create);
route.get("/api/user", userController.find);
route.put("/api/user/:id", userController.update);
route.delete("/api/user/:id", userController.delete);

module.exports = route;
