const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allowedCountries = ["COLOMBIA", "RUSSIA", "ENGLAND", "UNITED STATES", "ARGENTINA", "CZECHOSLOVAKIA", "JAPAN", "NIGERIA"]

// Creamos el schema del autor
const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "por favor, el nombre de autor debe tener al menos 3 letras"],
      maxLength: [20, "por favor, el nombre de autor debe tener al máximo 20 letras"],
      trim: true,
    },
    country: {
      type: String,
      required: true,
      uppercase: true,
      enum: allowedCountries,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", authorSchema);
module.exports = { Author };
