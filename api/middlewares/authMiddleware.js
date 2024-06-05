const firebaseAdmin = require("firebase-admin");

const authMiddleware = (req, res, next) => {
  // Comprobar si la sesión contiene un usuario autenticado
  if (req.session && req.session.user) {
    next(); // El usuario está autenticado, continuar a la siguiente función
  } else {
    // Si no hay un usuario en la sesión, redirigir al formulario de login
    res.redirect("/login");
  }
};

module.exports = authMiddleware;
