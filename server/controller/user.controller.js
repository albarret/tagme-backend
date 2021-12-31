var User = require("../model/user.model");

exports.find = (req, res) => {
  if (!req.body && req.body === {}) {
    console.log("oie");
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const body = req.body;

  User.find({
    name: body.nome,
    password: body.password,
  })
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
