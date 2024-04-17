// cargar las variables de entorno
require("dotenv").config();
const DB_CONECTION = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const mongoose = require("mongoose");

// configuaracion de la conexion
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  dbName: DB_NAME,
};

const connect = async () => {
  const database = await mongoose.connect(DB_CONECTION, config);
  const name = database.connection.name;
  const host = database.connection.host;
  console.log(`Conectado a la base de datos ${name} en el host ${host}`);
  return database;
};

module.exports = { connect };
