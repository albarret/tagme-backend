var User = require("../model/user.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const body = req.body;

  const user = new User({
    name: body.name,
  });

  User.save(user)
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while crating new User",
      });
    });
};

exports.find = (req, res) => {
  User.find({})
    .populate("company")
    .exec()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while finding User",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id ${id}. Maybe User cannot be found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating User information." });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id ${id}. Maybe User cannot be found!`,
        });
      } else {
        res.send({ message: "User deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error deleting User with id" + id });
    });
};
