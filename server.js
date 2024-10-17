const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Import the CORS package
const app = express();
const port = 9001;

// Ruta al archivo db.json
const dbPath = path.join(__dirname, "db.json");

// Middleware para manejar JSON
app.use(express.json());

// Habilitar CORS para todas las rutas
app.use(cors());

// Ruta para obtener todo el menú de café
app.get("/coffeeMenu", (req, res) => {
  fs.readFile(dbPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error al leer el archivo" });
    }
    const db = JSON.parse(data);
    res.json(db.coffeeMenu);
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
