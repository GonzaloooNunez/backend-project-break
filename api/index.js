const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const methodOverride = require("method-override");
var cors = require("cors");

require("dotenv").config();

const app = express();

connectDB();
app.use(cors());

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Métodos HTTP PUT y DELETE

app.use(methodOverride("_method"));

// Rutas
app.use(productRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} http://localhost:${PORT}`);
});
