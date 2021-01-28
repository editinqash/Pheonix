const express = require('express')
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')
const mongoose = require('mongoose')
const Products = require('../models/Products')
const Adverts = require('../models/Adverts')
router.get('/login', (req,res) => {
    res.render('welcome')
})
router.get('/dashboard', ensureAuthenticated, (req,res) => {
        res.render('dashboard', {
            user: req.user.user,
            products: req.user.products,
        })
})

router.get('/home', (req,res) => {
    Adverts.find({}, (err, adverts) => {
        res.render('home', {
            adverts: adverts
        })
    })
})

router.get('/adverts', (req,res) => {
    Adverts.find({}, (err, adverts) => {
        res.render('adverts', {
            adverts: adverts
        })
    })
})

router.get('/products', (req,res) => {
    Products.find({}, (err, products) => {
        res.render('products', {products: products})
    })
})

module.exports = router;
