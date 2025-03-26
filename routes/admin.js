const express = require('express')
const router = express.Router();

// this will run only for add product
router.get('/add-product', (req, res, next) => {
    // in this middleware we will send a response - so no need to call next
    console.log('Hello from add product middleware');
    // no need to specify the content type header as text/html - it is the default
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

router.post('/product', (req, res, next) => {
    // now body will hold the form data - after it is parsed
    console.log(req.body);
    // redirect back to root - no need to set status and header location
    res.redirect('/');
})
module.exports = router;