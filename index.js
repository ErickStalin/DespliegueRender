const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
app.set("view engine", "ejs");

// Rutas
app.get("/", (req, res) => {
  const msj = {
    title: "DESPLIEGUE",
    message: "Aplicacion con renderizado!",
  };
  res.render("index", { msj });
});

app.get("/integrantes", (req, res) => {
  res.json([
    {
      nombre: "Erick",
      apellido: "Santillan",
      edad: 21,
    },
    {
      nombre: "Gustavo",
      apellido: "Uchuari",
      edad: 24,
    },
    {
      nombre: "Elian",
      apellido: "Moreira",
      edad: 20,
    },
  ]);
});
//imagen
app.get('/venta',(req,res)=>{
    res.sendFile('./casa.jpg',{
        root:__dirname
    })
})

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

  res.send("Hola estas en la ruta autor");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
