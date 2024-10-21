const express = require('express');
const productRouter = express.Router();
productRouter.get('/', (req, res) => {
  res.send('Product route');
})
module.exports = productRouter;