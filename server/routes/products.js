const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/products/seed
// @desc    Seed products data
// @access  Public (Should be protected in prod)
router.post('/seed', async (req, res) => {
    try {
        const products = [
            {
                name: 'Organic Green Superfood',
                description: 'A blend of organic greens, fruits, and vegetables.',
                price: 48,
                imageSrc: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
                imageAlt: 'Bottle of green superfood.',
                category: 'Supplements'
            },
            {
                name: 'Multi-Vitamin Daily',
                description: 'Essential vitamins and minerals for daily health.',
                price: 35,
                imageSrc: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
                imageAlt: 'Bottle of vitamins.',
                category: 'Supplements'
            },
            {
                name: 'Whey Protein Isolate',
                description: 'High-quality protein for muscle recovery.',
                price: 55,
                imageSrc: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
                imageAlt: 'Protein powder.',
                category: 'Protein'
            }
        ];

        await Product.deleteMany();
        const createdProducts = await Product.insertMany(products);
        res.json(createdProducts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
