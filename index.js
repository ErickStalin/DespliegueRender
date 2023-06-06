// Importar los módulos necesarios
const express = require("express");

// Configurar la aplicación Express
const app = express();
app.set("view engine", "ejs");

// Definir las rutas
app.get("/", (req, res) => {
  const data = {
    title: "DESPLIEGUE",
    message: "Aplicacion con renderizado!",
  };
  res.render("index", { data });
});
// Middleware 
const logica = (req, res, next) => {
  console.log("Hola ");
  req.customData = "Se ah accedido a la ruta autor";
  next();
};

// Uso el middleware
app.use(logica);

app.get("/autor", (req, res) => {
  console.log(req.customData);
  // Respuesta
  res.send("Hola estas en la ruta autor");
});


app.listen(3000, () => {
  console.log("Ok en el puerto 3000");
});
