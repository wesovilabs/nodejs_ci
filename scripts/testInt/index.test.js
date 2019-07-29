const axios = require('axios')

const instance = axios.create({
    baseURL: `http://${process.env.APP}/`,
    timeout: 2000,
    headers: {'ContentType': 'application/json'}
});

describe('GET quotes list when there\'re not quotes', () => {
    test('It should respond to the GET method', async () => {
        const result = await instance.get('/quotes')
        expect(result.status).toBe(200)
        expect(result.data).toHaveLength(0)
    });
})

describe('GET quotes list when there\'re 2 quotes', () => {

    beforeAll(function(done) {
        const result = instance.post('/quotes',{
            author:'Leonardo Da Vinci',
            text:'The time will come when men such as I will look upon the murder of animals as they now look upon the murder of men.'
        })
        result.then(data=>{
            expect(data.status).toBe(201)
            return done();
        })

    });


    test('It should respond to the GET method', async () => {
        const result = await instance.get('/quotes')
        expect(result.status).toBe(200)
        expect(result.data).toHaveLength(1)
    });
})
