// const express = require('express');
// const app = express();
// const productRoutes = express.Router();

// // Require product model in our routes module
// let Products = require('../models/product.model');
// // app.get('/', function (req, res) {
// //   res.send('hello world')
// // })
// // Defined store route
// productRoutes.route('/add').post(function (req, res) {
//   conole.log("IN productRoutes", req.body)
//   let prodetails = new Products(req.body);
//   prodetails.save()
//     .then(prodetails => {
//       res.status(200).json({'prodetails': 'product added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

// // Defined get data(index or listing) route
// productRoutes.route('/').get(function (req, res) {
//   console.log("in productRoutes")
//     Products.find(function (err, productes){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(productes);
//     }
//   });
// });

// // Defined edit route
// productRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Products.findById(id, function (err, prodetails){
//       res.json(prodetails);
//   });
// });

// //  Defined update route
// productRoutes.route('/update/:id').post(function (req, res) {
//     Products.findById(req.params.id, function(err, next, prodetails) {
//     if (!prodetails)
//       return next(new Error('Could not load Document'));
//     else {
//         prodetails.productname = req.body.productname;
//         prodetails.price = req.body.price;
//         prodetails.description = req.body.description;

//         prodetails.save().then(prodetails => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// // Defined delete | remove | destroy route
// productRoutes.route('/delete/:id').get(function (req, res) {
//     Products.findByIdAndRemove({_id: req.params.id}, function(err, prodetails){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

// module.exports = productRoutes;

module.exports = (app) => {
    const Productnames = require('../controller/product.controller.js');

    
   app.post('/CreateProduct', Productnames.create);

   app.get('/GetAllProducts', Productnames.findAll);

   app.get('/GetAllAttachments', Productnames.findAllattachments);

   app.get('/GetOneProduct/:prodId', Productnames.edit);

    app.put('/UpdateProduct/:prodId', Productnames.update);

    app.delete('/DeleteProduct/:prodId', Productnames.delete);
}