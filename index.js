const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moviesRoute = require('./src/routes/movies');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(bodyParser());

app.use('/movies', moviesRoute);

app.get('/health-check', (req,res) => {
  res.send('hello');
})

const startServer = async () => {
  try {
    console.log(process.env.DB_HOST)
    // console.log(process.env.DB_HOST)
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}${process.env.DB_NAME}`);

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    })
  } catch(e) {
    console.log(e)
  }
}

startServer();


