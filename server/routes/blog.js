const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// @route   GET api/blog
// @desc    Get all blog posts
// @access  Public
router.get('/', async (req, res) => {
    try {
        const posts = await BlogPost.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/blog/seed
// @desc    Seed blog data
// @access  Public (Should be protected in prod)
router.post('/seed', async (req, res) => {
    try {
        const posts = [
            {
                title: 'The Metabolic Advantage: Biohacking Your Nutrition',
                category: 'Nutrition Science',
                description: 'Understand how to optimize your metabolic flexibility through clinical nutrition protocols and timed eating.',
                imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2000',
                author: 'Dr. Sarah Chen',
                authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=256',
                content: 'Experience the next level of wellness with metabolic biohacking. By understanding your unique biological response to different macronutrients, you can unlock unprecedented energy levels and cognitive clarity.'
            },
            {
                title: 'Longevity Protocols: Science-Backed Ageing',
                category: 'Longevity',
                description: 'Discover the latest research in cellular health and how specific micronutrients can help maintain vitality.',
                imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000',
                author: 'Marcus Wellman',
                authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256',
                content: 'Longevity isn\'t just about living longer; it\'s about living better. Our latest research dives into NAD+ precursors, sirtuin activation, and the role of high-intensity functional training.'
            },
            {
                title: 'Mindful Eating in a Fast-Paced World',
                category: 'Lifestyle',
                description: 'How to maintain nutritional discipline and metabolic health while balancing a high-performance career.',
                imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000',
                author: 'Elena Rodriguez',
                authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256',
                content: 'The modern professional faces unique challenges in maintaining a healthy diet. Learn the strategies used by top executives to stay nourished and focused throughout 12-hour workdays.'
            },
            {
                title: 'The Gut-Brain Connection Defined',
                category: 'Health',
                description: 'Deep dive into the microbiome and its profound impact on your mental clarity and mood stability.',
                imageUrl: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=2000',
                author: 'Dr. James Wilson',
                authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256',
                content: 'Recent studies have shown that 90% of serotonin is produced in the gut. We explore how a diverse microbiome is the foundation of mental health.'
            }
        ];

        await BlogPost.deleteMany();
        const createdPosts = await BlogPost.insertMany(posts);
        res.json(createdPosts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/blog/:id
// @desc    Get blog post by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;
