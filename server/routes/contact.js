const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

// @route   POST api/contact
// @desc    Submit a contact form
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });

        const contact = await newContact.save();

        // Send Email to Admin
        try {
            await sendEmail({
                email: process.env.EMAIL_USER, // Send to site owner
                subject: `New Contact Form: ${subject}`,
                html: `
                    <h3>New Contact Request</h3>
                    <p><strong>From:</strong> ${name} (${email})</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
            });

            // Send Auto-Reply to User
            await sendEmail({
                email: email, // Send to the person who filled the form
                subject: 'Thank you for contacting USWellnessCenter',
                html: `
                    <h3>Hello ${name},</h3>
                    <p>Thank you for reaching out to USWellnessCenter. We have received your message regarding "${subject}".</p>
                    <p>Our team will review your request and get back to you within 24-48 hours.</p>
                    <br>
                    <p>Stay Healthy,</p>
                    <p><strong>USWellnessCenter Team</strong></p>
                `
            });
        } catch (emailErr) {
            console.error('Email could not be sent:', emailErr.message);
            // We don't return error here because the contact was already saved to DB
        }

        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
