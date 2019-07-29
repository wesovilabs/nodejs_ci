const quotes = require('../controllers/quotes');

module.exports = (router) => {
    router
        .post('/quotes/', quotes.create)
        .get('/quotes/', quotes.list)
}
