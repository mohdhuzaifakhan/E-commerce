const express = require('express');
const router = express.Router();
const addCartItem = require('../controllers/addCartItem')

router.put('/addCartItem',addCartItem.addIntoCart)




module.exports = router