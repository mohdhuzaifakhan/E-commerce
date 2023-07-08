const express = require('express');
const router = express.Router()
const admin = require('../controllers/admin')



router.get('/admin',admin.adminLogin)
router.post('/admin',admin.adminSignUp)


module.exports = router