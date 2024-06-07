/* // Importa Firebase
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");

// Configuración de Firebase (reemplaza estos valores con tus credenciales)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta las instancias de Firestore y Auth
const db = getFirestore(app);
const auth = getAuth(app);

module.exports = { db, auth }; */
