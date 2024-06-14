const error = (err, req, res, next) => {
  console.error(err.name, err.stack, err.mesagge);
  res
    .status(500)
    .send("Algo salió mal. Por favor, inténtalo de nuevo más tarde.");
};

module.exports = error;
