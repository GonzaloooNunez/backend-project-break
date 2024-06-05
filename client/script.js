const PORT = process.env.PORT || 5001;

const getAllProducts = async () => {
  const products = await fetch(`http://localhost:${PORT}/products`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const getProductById = async () => {
  const productId = 1;

  const products = await fetch(`http://localhost:${PORT}/products/${productId}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};



const addFunctionToButton(htmlId, callback) {
  const button = doc.getElementBy....
  button.onClicl(() => callback);
}


addFunctionToButton("id_del_boton", getAllProducts)
addFunctionToButton("id_del_boton_ver_product", getProductById)