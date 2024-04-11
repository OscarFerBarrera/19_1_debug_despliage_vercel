const express = require("express");

// Conexión a la BBDD
const { connect } = require("./db.js");
connect();

// Routes
const { bookRouter } = require("./routes/book.routes.js");

// Creamos router de expres
const PORT = 3000;
const server = express();
const router = express.Router();

// Configuración del server
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Ruta Home
router.get("/", (req, res) => {
  res.send("Esta es la home de nuestra API de Libros");
});

// Usamos las rutas
server.use("/", router);
server.use("/book", bookRouter);

server.listen(PORT, () => {
  console.log(`Server levantado en el puerto ${PORT}`);
});
