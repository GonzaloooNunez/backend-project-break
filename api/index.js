const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const authenticateJWT = require("./middlewares/authMiddleware");

dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.redirect("/products");
});

// Proteger rutas que requieren autenticación
app.use("/dashboard", authenticateJWT);

app.use("/products", productRoutes);
app.use("/login", authRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
