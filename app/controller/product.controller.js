// import { read } from 'fs';

const ProductController = require('../models/product.model.js');
// mongo = require('mongoose'),
//  assert = require('assert'),
//  url= "mongodb://localhost:27017/product",

exports.create = (req, res) => {
    console.log("product",req)
    console.log("prod2",req.productname)
    // Validate request
    // if(!req.body.productname) {
    //     return res.status(400).send({
    //         message: "product can not be empty"
    //     });
    // }    
    const note = new ProductController({
        
        productname: req.body.productname,
        price: req.body.price, 
        description:req.body.description
    });
    // mongo.connect(url, function (err, db) {
    //     assert.equal(null, err);
    //     db.collection('product').insertOne(note, function (err, result) {
    //         console.log("result",result)
    //         assert.equal(null, err);
    //         console.log('item has been inserted');
    //         db.close;
    //     });
    // });

    // res.redirect('/');
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error occurred while creating the product."
        });
    });
};
exports.findAll = (req, res) => {
    ProductController.find()
    .then(productall => {
        res.send(productall);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving prod."
        });
    });
};
exports.findAllattachments= (req, res) =>{
    alert(attachments)
}
exports.edit = (req, res) => {
     console.log("editable data",req.params)
    ProductController.findById(req.params.prodId)
    .then(product => {
        console.log("product of edit",product)
        if(!product) {
            return res.status(404).send({
                message: "prod not found with 404 id " + req.params.prodId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "prod not found " + req.params.prodId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.prodId
        });
    });
};
exports.update = (req, res) => {
    // console.log("update name",req.body.productname)
    console.log("update body data",req.body)
    console.log("update param data",req.params)
    
 // Validate Request
    if(!req.body.productname) {
        return res.status(400).send({
            message: "prod content can not be empty"
        });
    }
    ProductController.findByIdAndUpdate(req.params.prodId, {
       productname: req.body.productname,
        description : req.body.description,
        price: req.body.price || "Untitled price",
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "prod not found with id 2 " + req.params.prodId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "prod not found with id 3 " + req.params.prodId
            });                
        }
        return res.status(500).send({
            message: "Error updating prod with id " + req.params.prodId
        });
    });
};
exports.delete = (req, res) => {
    console.log("sure to delete", req.params.prodId)
    ProductController.findByIdAndRemove(req.params.prodId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "product not found with id " + req.params.prodId
            });
        }
        res.send({message: "product deleted successfully"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "product not found with id " + req.params.prodId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.prodId
        });
    });
};