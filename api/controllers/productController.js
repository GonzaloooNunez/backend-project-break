const Product = require("../models/Product");
const { baseHtml, endHtml } = require("../middlewares/htmlTemplates");

function getNavBar(isDashboard = false) {
  const linkStyle =
    "display: block; padding: 8px 20px; text-decoration: none; color: #fff; background-color: #007bff; border-radius: 5px; margin-bottom: 10px;";

  const logoutStyle =
    "display: block; padding: 8px 20px; text-decoration: none; color: #fff; background-color: #dc3545; border-radius: 5px; margin-bottom: 10px;";

  return `
    <nav style="padding: 10px 0; display: flex; flex-direction: column; align-items: flex-start;">
      <a href="/products" style="${linkStyle}">Home</a>
      ${
        isDashboard
          ? `<a href="/dashboard/new" style="${linkStyle}">Add New Product</a>`
          : ""
      }
      <a href="/login/logout" style="${logoutStyle}">Logout</a>
    </nav>
  `;
}

function getProductCardsAdmin(products) {
  let html = "";
  products.forEach((product) => {
    html += `
    <li class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>${product.price}€</p>
      <a href="/products/${product._id}">Ver detalle</a>
      <div class="btn-container">
      <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST">
          <button class="btn btn-delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
      </form>
      <a href="/dashboard/${product._id}/edit"><button class="btn btn-edit">
                    <i class="fas fa-pencil-alt"></i>
                </button></a>
      </div>
    </li>
    `;
  });
  return html;
}

function getProductCards(products) {
  let html = "";
  products.forEach((product) => {
    html += `
    <li class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>${product.price}€</p>
      <a href="/products/${product._id}">Ver detalle</a>
    </li>
    `;
  });
  return html;
}

const showProducts = async (req, res, next) => {
  try {
    const category = req.query.category;
    let products;

    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }

    const productCards = getProductCards(products);
    const html = baseHtml + productCards + endHtml;
    res.send(html);
  } catch (err) {
    next(err);
  }
};

const showProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).send("Producto no encontrado");
    }

    const html =
      baseHtml +
      `
      <div class="product-detail">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}€</p>
      </div>
    </body></html>`;
    res.send(html);
  } catch (err) {
    next(err);
  }
};

const showDashboard = async (req, res, next) => {
  try {
    const products = await Product.find();
    const productCards = getProductCardsAdmin(products, true);
    const html = baseHtml + getNavBar(true) + productCards + "</body></html>";
    res.send(html);
  } catch (err) {
    next(err);
  }
};

const showNewProduct = (req, res) => {
  const html =
    baseHtml +
    getNavBar(true) +
    `
    <form action="/dashboard" method="POST">
      <input type="text" name="name" placeholder="Name" required>
      <input type="text" name="description" placeholder="Description" required>
      <input type="text" name="image" placeholder="Image URL" required>
      <input type="text" name="category" placeholder="Category" required>
      <input type="text" name="size" placeholder="Size" required>
      <input type="number" name="price" placeholder="Price" required>
      <button type="submit">Add Product</button>
    </form>
  </body></html>`;
  res.send(html);
};

const createProduct = async (req, res, next) => {
  try {
    const { name, description, image, category, size, price } = req.body;
    const product = new Product({
      name,
      description,
      image,
      category,
      size,
      price,
    });
    await product.save();
    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
};

const showEditProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).send("Producto no encontrado");
    }

    const html =
      baseHtml +
      getNavBar(true) +
      `<br></br>
      <div style="display: ; justify-content: center; align-items: center; height: 100vh; margin-left: -170px ;margin-top:100px; width: 500px; ">
        <form action="/dashboard/${product._id}?_method=PUT" method="POST" style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 300px;">
          <input type="text" name="name" placeholder="Nombre del Producto" value="${product.name}" style="display: block; margin-bottom: 15px; padding: 10px; width: 90%; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;" required>
          <input type="text" name="description" placeholder="Descripción del Producto" value="${product.description}" style="display: block; margin-bottom: 15px; padding: 10px; width: 90%; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;" required>
          <input type="text" name="image" placeholder="URL de la Imagen" value="${product.image}" style="display: block; margin-bottom: 15px; padding: 10px; width: 90%; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;" required>
          <input type="text" name="category" placeholder="Categoría" value="${product.category}" style="display: block; margin-bottom: 15px; padding: 10px; width: 90%; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;" required>
          <input type="text" name="size" placeholder="Tamaño" value="${product.size}" style="display: block; margin-bottom: 15px; padding: 10px; width: 90%; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;" required>
          <input type="number" name="price" placeholder="Precio" value="${product.price}" style="display: block; margin-bottom: 15px; padding: 10px; width: 90%; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;" required>
          <button type="submit" style="background-color: #4CAF50; color: white; border: none; cursor: pointer; display: block; width: 90%; padding: 10px; border-radius: 5px;">Actualizar Producto</button>
        </form>
      </div>`;
    res.send(html);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { name, description, image, category, size, price } = req.body;
    await Product.findByIdAndUpdate(req.params.productId, {
      name,
      description,
      image,
      category,
      size,
      price,
    });
    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.redirect("/dashboard");
};

module.exports = {
  showProducts,
  showProductById,
  showDashboard,
  showNewProduct,
  createProduct,
  showEditProduct,
  updateProduct,
  deleteProduct,
};
