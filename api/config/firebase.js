const admin = require("firebase-admin");
const serviceAccount = require("./path-to-serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-name.firebaseio.com", // PONER MI DATABASE !!
});

module.exports = admin;
