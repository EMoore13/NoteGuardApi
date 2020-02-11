const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require("body-parser");
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/noteguard", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();

    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use('/api', routes);

    app.listen(5000, () => {
      console.log("Server has started!")
    });
  })
  .catch(e => {
      console.log(e);
  });