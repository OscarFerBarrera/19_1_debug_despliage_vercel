const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allowedCountries = ["COLOMBIA", "RUSSIA", "ENGLAND", "UNITED STATES", "ARGENTINA", "CZECHOSLOVAKIA", "JAPAN", "NIGERIA"]

// Creamos el schema del libro
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [3, "por favor, el titulo del libro debe tener al menos 3 letras"],
      maxLength: [20, "por favor, el titulo del libro debe tener al máximo 20 letras"],
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: false,
    },
    pages: {
      type: Number,
      required: false,
      min: [1, "El número minimo es 1 pagina"],
      max: [1000, "El número maximo es 1000 paginas"],
    },
    publisher: {
      type: {
        name: {
          type: String,
          required: true,
          minLength: [3, "por favor, el nombre de la editorial debe tener al menos 3 letras"],
          maxLength: [20, "por favor, el nombre de la editorial debe tener al máximo 20 letras"],
          trim: true,
        },
        country: {
          type: String,
          required: true,
          enum: allowedCountries,
          uppercase: true,
          trim: true,
        },
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book };
