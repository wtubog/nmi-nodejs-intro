const Movies = require('./../models/movie.model');

module.exports = {
  async getMovies (req, res) {
    try {
      const movies = await Movies.find();
      res.send(movies);
    } catch(e) {
      res.status(500)
    }
  },
  
  async createMovie(req, res) {
    try {
      const movies = await Movies.create(req.body);
      res.status(201);
      res.send(movies);
    } catch(e) {
      console.log(e.code);
      if(e.code == 11000) {
        res
          .status(400)
          .send({
            error: 'Duplicate title'
          });
      } else {
        res.status(500).send();
      }
    }
  }
}