const PORT = 5000;

async function fetchProductos() {
  const apiUrl = `http://localhost:${PORT}/products`;
  const contenedor_productos = document.getElementById("contenedor_productos");

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    contenedor_productos.innerHTML = "";

    data.forEach((producto) => {
      const productos_ul = document.createElement("ul");
      productos_ul.innerHTML = `
          <li><strong>Name:</strong> ${producto.name}</li>
          <li><strong>Description:</strong> ${producto.description}</li>
          <li><strong>Category:</strong> ${producto.category}</li>
          <li><img src="${producto.image} alt="Producto" style="max-width: 100%; height: auto;"></li>
          <li><strong>Size:</strong> ${producto.size}</li>
          <li><strong>Price:</strong> ${producto.price}</li>
      `;
      contenedor_productos.appendChild(productos_ul);
    });
  } catch (error) {
    console.error("Error fetching productos:", error);
    document.getElementById("api-data").innerText =
      "Error fetching productos. Please try again.";
  }
}

async function fetchCamisetas() {
  const apiUrl = `http://localhost:${PORT}/products`;
  const contenedor_productos = document.getElementById("contenedor_productos");

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    contenedor_productos.innerHTML = "";

    // Camisetas
    const camisetas = data.filter(
      (producto) => producto.category === "Camisetas"
    );

    camisetas.forEach((producto) => {
      const productos_ul = document.createElement("ul");
      productos_ul.innerHTML = `
          <li><strong>Name:</strong> ${producto.name}</li>
          <li><strong>Description:</strong> ${producto.description}</li>
          <li><strong>Category:</strong> ${producto.category}</li>
          <li><img src="${producto.image} alt="Producto" style="max-width: 100%; height: auto;"></li>
          <li><strong>Size:</strong> ${producto.size}</li>
          <li><strong>Price:</strong> ${producto.price}</li>
      `;
      contenedor_productos.appendChild(productos_ul);
    });
  } catch (error) {
    console.error("Error fetching productos:", error);
    document.getElementById("api-data").innerText =
      "Error fetching productos. Please try again.";
  }
}

async function fetchPantalones() {
  const apiUrl = `http://localhost:${PORT}/products`;
  const contenedor_productos = document.getElementById("contenedor_productos");

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    contenedor_productos.innerHTML = "";

    // Pantalones
    const camisetas = data.filter(
      (producto) => producto.category === "Pantalones"
    );

    camisetas.forEach((producto) => {
      const productos_ul = document.createElement("ul");
      productos_ul.innerHTML = `
          <li><strong>Name:</strong> ${producto.name}</li>
          <li><strong>Description:</strong> ${producto.description}</li>
          <li><strong>Category:</strong> ${producto.category}</li>
          <li><img src="${producto.image} alt="Producto" style="max-width: 100%; height: auto;"></li>
          <li><strong>Size:</strong> ${producto.size}</li>
          <li><strong>Price:</strong> ${producto.price}</li>
      `;
      contenedor_productos.appendChild(productos_ul);
    });
  } catch (error) {
    console.error("Error fetching productos:", error);
    document.getElementById("api-data").innerText =
      "Error fetching productos. Please try again.";
  }
}

async function fetchZapatos() {
  const apiUrl = `http://localhost:${PORT}/products`;
  const contenedor_productos = document.getElementById("contenedor_productos");

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    contenedor_productos.innerHTML = "";

    // Zapatos
    const camisetas = data.filter(
      (producto) => producto.category === "Zapatos"
    );

    camisetas.forEach((producto) => {
      const productos_ul = document.createElement("ul");
      productos_ul.innerHTML = `
            <li><strong>Name:</strong> ${producto.name}</li>
            <li><strong>Description:</strong> ${producto.description}</li>
            <li><strong>Category:</strong> ${producto.category}</li>
            <li><img src="${producto.image} alt="Producto" style="max-width: 100%; height: auto;"></li>
            <li><strong>Size:</strong> ${producto.size}</li>
            <li><strong>Price:</strong> ${producto.price}</li>
        `;
      contenedor_productos.appendChild(productos_ul);
    });
  } catch (error) {
    console.error("Error fetching productos:", error);
    document.getElementById("api-data").innerText =
      "Error fetching productos. Please try again.";
  }
}

async function fetchAccesorios() {
  const apiUrl = `http://localhost:${PORT}/products`;
  const contenedor_productos = document.getElementById("contenedor_productos");

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    contenedor_productos.innerHTML = "";

    // Accesorios
    const camisetas = data.filter(
      (producto) => producto.category === "Accesorios"
    );

    camisetas.forEach((producto) => {
      const productos_ul = document.createElement("ul");
      productos_ul.innerHTML = `
            <li><strong>Name:</strong> ${producto.name}</li>
            <li><strong>Description:</strong> ${producto.description}</li>
            <li><strong>Category:</strong> ${producto.category}</li>
            <li><img src="${producto.image}"></li>
            <li><strong>Size:</strong> ${producto.size}</li>
            <li><strong>Price:</strong> ${producto.price}</li>
        `;
      contenedor_productos.appendChild(productos_ul);
    });
  } catch (error) {
    console.error("Error fetching productos:", error);
    document.getElementById("api-data").innerText =
      "Error fetching productos. Please try again.";
  }
}

function fetchLogin() {
  const apiUrl = "LOGIN_URL";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error("Error fetching camisetas:", error);
      document.getElementById("api-data").innerText =
        "Error fetching camisetas. Please try again.";
    });
}

function displayData(data) {
  const apiDataDiv = document.getElementById("api-data");
  apiDataDiv.innerHTML = "";

  // personalizar datos
  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.textContent = JSON.stringify(item);
    apiDataDiv.appendChild(itemDiv);
  });
}
