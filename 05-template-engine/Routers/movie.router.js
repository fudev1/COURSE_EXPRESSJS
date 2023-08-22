const { Router } = require('express');

const movieRouter = Router();

movieRouter.get('/', (req, res) => {
    res.send('<h1>Movie</h1>');
});

exports.movieRouter = movieRouter;