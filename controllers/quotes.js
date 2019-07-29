const Quote = require('../models/quotes');

let controller = {
    create: async (ctx) => {
        try{
            let quote = new Quote({
                text: ctx.request.body.text,
                author: ctx.request.body.author,
            });
            quote = await quote.save();
            ctx.body = quote.toClient();
            ctx.status = 201;
        } catch (err) {
            ctx.body = err;
            ctx.status = 400;
        }
    },
    list: async (ctx) => {
        const quotes = await Quote.find({});
        for(let i = 0; i < quotes.length; i++) {
            quotes[i] = quotes[i].toClient();
        }
        ctx.body = quotes;

    },

}

module.exports = controller;
