const ProductController = require('../controller/proudct.controller');
module.exports = function(app){
    app.get('/api/product/:id', ProductController.getProduct);
    app.get('/api/product', ProductController.findAllProduct);
    app.post('/api/product', ProductController.createProduct);
    
}
