const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: Array,
    required: true,
  },
  modoPreparo: {
    type: Object,
    required: true,
  },
  tempoPreparo: {
    type: String,
    required: true,
  },
  bigImgPath: {
    type: String,
    required: true,
  },
  smallImgPath: {
    type: String,
    required: true,
  },
});

var Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
