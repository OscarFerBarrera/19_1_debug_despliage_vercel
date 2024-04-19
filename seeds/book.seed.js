const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Book } = require("../models/Book.js");

const bookSeed = async () => {
  try {
    const bookList = [
      { title: "Harry Potter", pages: 543, publisher: { name: "AAA", country: "England" } },
      { title: "1984",pages: 328, publisher: { name: "Nueva Edit",country: "EEUU" } },
      { title: "To Kill a Mockingbird", pages: 281, publisher: { name: "Panamera", country: "Francia" } },
      { title: "The Great Gatsby", pages: 180, publisher: { name: "Mundo", country: "Canada" } },
      { title: "Pride and Prejudice", pages: 279, publisher: { name: "Canelo", country: "España" } },
    ];

    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await Book.collection.drop();
    console.log("Libros borrados");

    // Añadimos usuarios
    const documents = bookList.map((book) => new Book(book));
    await Book.insertMany(documents);
    console.log("Datos de libros guardados correctamente!");
  } catch (error) {
    console.error(error)
  } finally {
    mongoose.disconnect();
  }
};

bookSeed();
