const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected');

        const adminEmail = process.env.ADMIN_EMAIL || 'admin@wellnutrition.com';
        const adminPassword = process.env.ADMIN_PASSWORD || 'welladmin123';

        // Delete existing to ensure fresh hash if needed
        await User.findOneAndDelete({ email: adminEmail });
        console.log('Old admin user removed (if existed)');

        const admin = new User({
            name: 'WellNutrition Admin',
            email: adminEmail,
            password: adminPassword,
            role: 'admin'
        });

        await admin.save();
        console.log('Fresh admin account created successfully');
        console.log('Email: ' + adminEmail);
        console.log('Password: ' + adminPassword);

        process.exit();
    } catch (err) {
        console.error('Error creating admin:', err.message);
        process.exit(1);
    }
};

createAdmin();
