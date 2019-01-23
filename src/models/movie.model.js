const { Schema, model } = require('mongoose');

const Movie = new Schema({
  cover: String,
  id: String,
  suggestedBy: String,
  synopsis: String,
  title: {
    type: String,
    unique: true
  }
});

module.exports = model('Movie', Movie);