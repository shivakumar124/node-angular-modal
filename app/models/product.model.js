const mongoose = require('mongoose');

const Products = mongoose.Schema({
    productname: {
        type: String
      },
      price: {
        type: Number
      },
      description: {
        type: String
      }
}, {
    timestamps: true
}, {
    collection: 'product'
}
);
module.exports = mongoose.model('Products', Products);