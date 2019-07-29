const controller = require('./quotes');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
require('../models/quotes');

describe( 'listQuotes', () =>{

    let connection;
    let db;



    beforeEach(done=> {
        setup = async () => {
            for (var i in mongoose.connection.collections) {
                mongoose.connection.collections[i].remove(function() {});
            }
            connection = await MongoClient.connect(global.__MONGO_URI__, {useNewUrlParser: true});
            db = await connection.db(global.__MONGO_DB_NAME__);
            const coll = db.collection('quotes');
            await coll.insertOne({
                text: 'Could you look an animal in the eyes and say to it, \'My appetite is more important than your suffering\'?',
                author: 'Moby'
            });
            return done();
        }

        mongoose.connect(
                global.__MONGO_URI__,
                function(err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log('removing database')

                        return setup();
                    }
                }
            );

    });

    afterEach(function(done) {
        mongoose.disconnect();
        return done();
    });

    beforeAll(async () => {
        console.log('beforeAll')
        connection = await MongoClient.connect(global.__MONGO_URI__, {useNewUrlParser: true});
        db = await connection.db(global.__MONGO_DB_NAME__);
        const coll = db.collection('quotes');
        await coll.insertOne({
            text: 'Could you look an animal in the eyes and say to it, \'My appetite is more important than your suffering\'?',
            author: 'Moby'
        });
    });

    afterAll(async () => {
        await connection.close();
    });

    it('List quotes works', async () => {
        let ctx={}
        await controller.list(ctx);
        console.log('evaluating')
        expect(ctx.body).toHaveLength(1);
    });

})


