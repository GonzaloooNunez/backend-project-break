const admin = require("../config/firebase");

const showLoginForm = (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input type="email" name="email" placeholder="Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  `);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    // Aquí puedes añadir la lógica de verificación de la contraseña
    req.session.user = userRecord;
    res.redirect("/dashboard");
  } catch (error) {
    res.send("Error al iniciar sesión: " + error.message);
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

module.exports = {
  showLoginForm,
  login,
  logout,
};
