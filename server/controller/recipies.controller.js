var Recipe = require("../model/recipe.model");

exports.find = (req, res) => {
  Recipe.find({})
    .exec()
    .then((recipies) => {
      res.status(200).json(recipies);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while finding recipe",
      });
    });
};
