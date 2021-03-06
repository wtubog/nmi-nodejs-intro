const router = require('express').Router();
const moviesController = require('./../controllers/movies.controller'); 

router.get('/', moviesController.getMovies);
router.post('/', moviesController.createMovie);

router.get('/health-check', moviesController.healthCheck);

module.exports = router;