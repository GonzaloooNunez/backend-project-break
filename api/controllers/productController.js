const Product = require("../models/Product");
const { baseHtml, endHtml } = require("../middlewares/htmlTemplates");

function getNavBar(isDashboard = false) {
  return `
  <nav>
    <a href="/products">Home</a> <br></br>
    ${
      isDashboard ? '<br></br><a href="/dashboard/new">Add New Product</a>' : ""
    }
  </nav>
  `;
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
      <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST">
          <button class="btn btn-delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
      </form>
      <a href="/dashboard/${product._id}/edit"><button class="btn btn-edit">
                    <i class="fas fa-pencil-alt"></i>
                </button></a>
    </li>
    `;
  });
  return html;
}

const showProducts = async (req, res) => {
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
};

const showProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
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
};

const showDashboard = async (req, res) => {
  const products = await Product.find();
  const productCards = getProductCards(products, true);
  const html = baseHtml + getNavBar(true) + productCards + "</body></html>";
  res.send(html);
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

const createProduct = async (req, res) => {
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
};

const showEditProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  const html =
    baseHtml +
    getNavBar(true) +
    `<br></br>
    <form action="/dashboard/${product._id}?_method=PUT" method="POST">
      <input type="text" name="name" value="${product.name}" required>
      <input type="text" name="description" value="${product.description}" required>
      <input type="text" name="image" value="${product.image}" required>
      <input type="text" name="category" value="${product.category}" required>
      <input type="text" name="size" value="${product.size}" required>
      <input type="number" name="price" value="${product.price}" required>
      <button type="submit">Update Product</button>
    </form>
  </body></html>`;
  res.send(html);
};

const updateProduct = async (req, res) => {
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
