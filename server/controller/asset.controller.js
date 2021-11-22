var Asset = require("../model/asset.model");
var Unit = require("../model/unit.model");
const mongoose = require("mongoose");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const body = req.body;

  const asset = new Asset({
    name: body.name,
    description: body.description,
    health: body.health,
    status: body.status,
    img: body.img,
    model: body.model,
    owner: body.owner,
    unit: body.unit,
  });

  asset
    .save(asset)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while crating new Asset",
      });
    });
};

exports.find = (req, res) => {
  Asset.find({})
    .populate("unit")
    .exec()
    .then((asset) => {
      res.status(200).json(asset);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while finding Asset",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

  const id = req.params.id;
  Asset.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update asset with id ${id}. Maybe asset cannot be found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating asset information." });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Asset.findByIdAndDelete(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete asset with id ${id}. Maybe asset cannot be found!`,
        });
      } else {
        res.send({ message: "Asset deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error deleting asset with id" + id });
    });
};
