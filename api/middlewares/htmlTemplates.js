const baseHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Nuestra Tienda de Ropa</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>

  body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 100vh;
            background-color: #f4f4f4;
        }
        
        header {
            width: 100%;
            background-color: #f8f8f8;
            position: fixed;
            margin-top: -30px;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 10px 0;
            top: -105px;
            max-height: 200px;
        }
        
        nav {
            text-align: center;
        }
        
        .content {
            margin-top: 45px; 
            padding: 10px;
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: calc(100% - 100px); 
            margin-left: 50px; 
            margin-right: 50px; 
            box-sizing: border-box; 
        }
        
        .content h1 {
        margin-top: 80px;

            font-size: 2.5em;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .content p {
            font-size: 1em;
            color: #666;
            text-align: center; 
        }
        
         .header-list {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            display: flex; 
            justify-content: center; 
            position: relative;
            top: 20px; 
            z-index: 2; 
        }
        
        .header-list li {
            display: inline;
            margin-right: 60px;
            list-style: none;
            
        }
        
        .header-list li a {
            display: block;
            padding: 5px 10px;
            text-decoration: none;
            color: #fff;
            background-color: #444;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        
        .header-list li:last-child a {
            background-color: transparent;
            padding: 0;
        }
        
        .header-list li img {
            width: 30px;
            height: 30px;
        }
        
        
        .product-card ul {
        
            list-style: none;
            margin-top: -30px;
            padding: 0;
        }
        
        ul {
            padding-top: 120px;
            list-style: none;
            margin-left: 100px;
            display: flex; 
            flex-wrap: wrap; 
            margin-top: 70px;
        }
        
        li {
            display: inline-block;
            margin: 10px;
            border-radius: 2%;
            margin-top: 0px;
            padding-bottom: 5px;
        }
        
        img {
            width: 300px;
            border-radius: 2%;
            height: 400px;
        }
        
        .product-card {
            list-style-type: none;
            display: inline-block;
            margin: 20px;
            padding: 20px;
            border: 2px solid #ccc;
            border-radius: 5px;
            width: 250px;
            text-align: center;
        }
        
        .product-card img {
        height: 300px;
            width: 100%;
            border-radius: 5px;
        }
        
        .product-card h2 {
            margin-top: 10px;
        }
        
        .product-card p {
            margin-top: 5px;
        }
        
        .product-card a {
            display: block;
            margin-top: 10px;
        }
        
        .product-card button {
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #f8f8f8;
            border: 1px solid #ccc;
            border-radius: 3px;
            cursor: pointer;
        }
        
        .product-card button:hover {
            background-color: #ddd; 
        }
        
        .btn-container {
    display: flex;
}

.btn-container {
    display: flex;
    align-items: center; 
    justify-content: center; 
    gap: 10px; 
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.btn-edit {
    background-color: transparent;
    color: #007bff;
}

.btn-delete {
    background-color: red;
    color: black;
}
        
        .btn i {
            margin-right: 5px;
        }

  </style>
</head>
<body>
  <header>
    <div class="content">
      <h1>NUESTRA TIENDA DE ROPA</h1>
      <p>Aquí encontrarás una gran variedad de productos para tu estilo de vida.</p>
       <nav>
      <ul class="header-list">
        <li><a href="/products">Productos</a></li>
        <li><a href="/products?category=Camisetas">Camisetas</a></li>
        <li><a href="/products?category=Pantalones">Pantalones</a></li>
        <li><a href="/products?category=Zapatos">Zapatos</a></li>
        <li><a href="/products?category=Accesorios">Accesorios</a></li>
        <li><a href="/login"><img src="https://cdn-icons-png.flaticon.com/256/7381/7381253.png" alt="Login"></a></li>
      </ul>
    </nav>
    </div>
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
