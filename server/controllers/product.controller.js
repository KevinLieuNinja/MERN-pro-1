const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message:'Checking out Items'
    });

}
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
module.exports.getAllProducts =(request, response) => {
    Product.find({})
        .then(Products => response.json(Products))
        .catch(err => response(err))
}
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
