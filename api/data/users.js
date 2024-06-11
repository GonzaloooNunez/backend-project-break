const bcrypt = require("bcrypt");
const saltRounds = 10;

const users = [
  {
    id: 1,
    username: "x",
    password: bcrypt.hashSync("x", saltRounds),
    name: "Usuario Uno",
    rol: "Admin",
  },
  {
    id: 2,
    username: "usuario2",
    password: bcrypt.hashSync("contraseña2", saltRounds),
    name: "Usuario Dos",
    rol: "User",
  },
];

module.exports = users;
