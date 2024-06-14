const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../data/users"); // Asegúrate de tener un modelo de usuario
const saltRounds = 10;

const secretKey = process.env.SECRET_KEY;

const showLoginForm = (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f0f2f5;
        }
        .login-container {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }
        h1 {
          text-align: center;
          margin-bottom: 1rem;
          color: #333;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #555;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          background: #007bff;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
        }
        button:hover {
          background: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="login-container">
        <h1>Login para Admins</h1>
        <form action="/login" method="POST">
          <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </body>
    </html>
  `);
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = users.find((user) => user.username === username);

    // el usuario existe
    if (!user) {
      return res.status(401).send("Credenciales incorrectas");
    }

    //  la contraseña coincide a traves d bcrypt.compare
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Credenciales incorrectas");
    }

    // Si las credenciales son correctas, genera y envía el token
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard"); // Redirige a la página deseada después de login
  } catch (err) {
    console.log(err);
    res.status(500).send("Error del servidor");
  }
};

const logout = (req, res) => {
  console.log("Logging out");
  res.clearCookie("token");
  console.log("Token cleared");
  res.redirect("/login");
};

module.exports = {
  showLoginForm,
  login,
  logout,
};
