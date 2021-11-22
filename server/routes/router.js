const express = require("express");
const route = express.Router();
const services = require("../services/render");
const assetControler = require("../controller/asset.controller");

route.get("/", services.homeRoutes);

// API
route.post("/api/assets", assetControler.create);
route.get("/api/assets", assetControler.find);
route.put("/api/assets/:id", assetControler.update);
route.delete("/api/assets/:id", assetControler.delete);

module.exports = route;
