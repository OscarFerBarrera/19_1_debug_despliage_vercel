const express = require("express");
const { bookRouter } = require("./routes/book.routes.js");

const main = async () => {
  // Conexión a la BBDD
  const { connect } = require("./db.js");
  const database = await connect();

  // Creamos router de expres
  const PORT = 3000;
  const server = express();
  // Configuración del server
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  // Rutas
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send("Esta es la home de nuestra API de Libros.");
  });

  // router.get("*", (req, res) => {
  //   res.status(404).send("Lo sentimos :( No hemos encontrado la página solicitada.");
  // });

  // Usamos las rutas
  server.use("/", router);
  server.use("/book", bookRouter);

  server.listen(PORT, () => {
    console.log(`Server levantado en el puerto ${PORT}`);
  });
};
main();
