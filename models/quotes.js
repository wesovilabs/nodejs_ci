const Mongoose = require('mongoose');

const quoteSchema = new Mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

quoteSchema.method('toClient', function() {
    let obj = this.toObject();
    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;
    delete obj.createdAt;
    delete obj.updatedAt;
    return obj;
});


Mongoose.model('Quote', quoteSchema);

module.exports = Mongoose.model('Quote');
