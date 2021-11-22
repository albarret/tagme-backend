var Company = require("../model/company.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const body = req.body;

  const company = new Company({
    name: body.name,
  });

  Company.save(company)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while crating new Company",
      });
    });
};

exports.find = (req, res) => {
  Company.find({})
    .exec()
    .then((company) => {
      res.status(200).json(company);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while finding Company",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

  const id = req.params.id;
  Company.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Company with id ${id}. Maybe Company cannot be found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Company information." });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Company.findByIdAndDelete(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Company with id ${id}. Maybe Company cannot be found!`,
        });
      } else {
        res.send({ message: "Company deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error deleting Company with id" + id });
    });
};
