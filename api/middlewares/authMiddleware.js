const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).send("Acceso denegado");
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).send("Acceso denegado");
  }
};

module.exports = authenticateJWT;
