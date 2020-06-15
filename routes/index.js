const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome page
router.get('/', (req, res) => {
    res.render('welcome')
})

// Dashboard page
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    var fname = req.user.name.split(" ")[0];
    res.render('dashboard', {
        name: fname
    })
})

// Posts page
router.get('/posts', ensureAuthenticated, (req, res) => {
    var fname = req.user.name.split(" ")[0];
    res.render('posts', {
        name: fname
    })
})

module.exports = router;