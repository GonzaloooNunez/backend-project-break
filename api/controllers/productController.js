const Product = require("../models/Product");

const showProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productCards = getProductCards(products);
    const html = baseHtml + getNavBar() + productCards;
    res.send(html);
  } catch (err) {
    res.status(500).send("Server Error, no se pueden mostrar los productos");
  }
};

const showProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    const productDetail = getProductDetail(product);
    const html = baseHtml + getNavBar() + productDetail;
    res.send(html);
  } catch (err) {
    res.status(500).send("Server Error, no se puede mostrar su producto");
  }
};

const showProductByCategory = async (req, res) => {
  const category = req.query.category;
  const products = await Product.findBy({ category });
  res.send(products)

}

const showNewProduct = (req, res) => {
  const html = baseHtml + getNavBar() + getNewProductForm();
  res.send(html);
};

const createProduct = async (req, res) => {
  try {
    console.log("hola !", req.req);

    const newProduct = new Product(req.body);
    await newProduct.validate();
    await newProduct.save();

    res.send(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error, no se ha podido crear su producto");
  }
};

const showEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    const editForm = getEditProductForm(product);
    const html = baseHtml + getNavBar() + editForm;
    res.send(html);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.productId, req.body);
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).send("Server Error, no se pudo actualizar el producto");
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).send("Server Error, no se pudo borrar el producto");
  }
};

const getProductCards = (products) => {
  let html = "";
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}€</p>
        <a href="/products/${product._id}">Ver detalle</a>
      </div>
    `;
  }
  return html;
};

const baseHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" type="text/css" href="/styles.css">
  </head>
  <body>
`;

const getNavBar = () => `
  <nav>
    <a href="/products">Productos</a>
    <a href="/dashboard/new">Nuevo Producto</a>
  </nav>
`;

const getProductDetail = (product) => `
  <div class="product-detail">
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>${product.price}€</p>
    <a href="/dashboard/${product._id}/edit">Editar</a>
    <form action="/dashboard/${product._id}/delete" method="POST">
      <button type="submit">Eliminar</button>
    </form>
  </div>
`;

const getNewProductForm = () => `
  <form action="/dashboard" method="POST">
    <input type="text" name="name" placeholder="Nombre">
    <textarea name="description" placeholder="Descripción"></textarea>
    <input type="text" name="image" placeholder="Imagen URL">
    <input type="text" name="category" placeholder="Categoría">
    <input type="text" name="size" placeholder="Talla">
    <input type="number" name="price" placeholder="Precio">
    <button type="submit">Crear</button>
  </form>
`;

const getEditProductForm = (product) => `
  <form action="/dashboard/${product._id}?_method=PUT" method="POST">
    <input type="text" name="name" value="${product.name}" placeholder="Nombre">
    <textarea name="description" placeholder="Descripción">${product.description}</textarea>
    <input type="text" name="image" value="${product.image}" placeholder="Imagen URL">
    <input type="text" name="category" value="${product.category}" placeholder="Categoría">
    <input type="text" name="size" value="${product.size}" placeholder="Talla">
    <input type="number" name="price" value="${product.price}" placeholder="Precio">
    <button type="submit">Actualizar</button>
  </form>
`;

module.exports = {
  showProducts,
  showProductById,
  showNewProduct,
  createProduct,
  showEditProduct,
  updateProduct,
  deleteProduct,
};
