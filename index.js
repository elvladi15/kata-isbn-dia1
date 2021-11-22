const express = require("express");
const app = express();
const isbnValidator = require("./isbnValidator");

app.use(express.json());
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ isbn: req.body.isbn, response: isbnValidator(req.body.isbn) });
});
app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
