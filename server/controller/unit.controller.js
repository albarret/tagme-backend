var Unit = require("../model/unit.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const body = req.body;

  const unit = new Unit({
    name: body.name,
    company: body.company,
  });

  unit
    .save(unit)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while crating new unit",
      });
    });
};

exports.find = (req, res) => {
  Unit.find({})
    .populate("company")
    .exec()
    .then((unit) => {
      res.status(200).json(unit);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while finding unit",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

  const id = req.params.id;
  Unit.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update unit with id ${id}. Maybe unit cannot be found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating unit information." });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Unit.findByIdAndDelete(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete unit with id ${id}. Maybe unit cannot be found!`,
        });
      } else {
        res.send({ message: "unit deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error deleting unit with id" + id });
    });
};
