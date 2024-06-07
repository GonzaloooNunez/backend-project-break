const baseHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Nuestra Tienda de Ropa</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    header {
      width: 100%;
      background-color: #f8f8f8;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 10px 0;
      top: -105px;
    }

    nav {
      text-align: center;
    }

    .header-list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .header-list li {
      display: inline;
      margin-right: 60px;
    }

    .header-list li button {
      padding: 10px 20px;
      text-decoration: none;
      color: black;
      border: 1px solid #ddd;
      background-color: white;
      cursor: pointer;
    }

    .header-list li button:hover {
      background-color: #ddd;
    }

    .content {
      margin-top: 70px;
      padding: 20px;
    }

    #contenedor_productos {
      margin-top: 170px;
      padding: 20px;
    }

    .content h1 {
      margin-left: 700px;
    }

    .content p {
      margin-left: 670px;
      margin-top: -15px;
    }
  </style>
</head>
<body>
  <header>
    <div class="content">
      <h1>NUESTRA TIENDA DE ROPA</h1>
      <p>Aquí encontrarás una gran variedad de productos para tu estilo de vida.</p>
    </div>
    <nav>
      <ul class="header-list">
        <li><a href="/products">Productos</a></li>
        <li><a href="/products?category=Camisetas">Camisetas</a></li>
        <li><a href="/products?category=Pantalones">Pantalones</a></li>
        <li><a href="/products?category=Zapatos">Zapatos</a></li>
        <li><a href="/products?category=Accesorios">Accesorios</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </header>
  <div id="contenedor_productos"><ul>
`;

const endHtml = `
  </ul></div>
  <div id="api-data"></div>
  <script src="/script.js"></script>
</body>
</html>
`;

module.exports = { baseHtml, endHtml };
