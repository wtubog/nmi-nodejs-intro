const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moviesRoute = require('./src/routes/movies');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser());

app.use('/movies', moviesRoute);

const startServer = async () => {
  await mongoose.connect(process.env.DB_CON)
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  })
}

startServer();


