const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const error = require("./middlewares/errorMiddleware");

async function main() {
  await connectDB();
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(methodOverride("_method"));
  app.use(cookieParser());

  app.get("/", (_req, res) => res.redirect("/products"));

  //localhost:PORT/dashboard
  app.use("/dashboard", dashboardRoutes);

  //localhost:PORT/products
  app.use("/products", productRoutes);

  //localhost:PORT/login
  app.use("/login", authRoutes);

  app.use(error);

  const port = process.env.PORT || 5001;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main();
