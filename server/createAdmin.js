const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected');

        const adminEmail = 'admin@uswellnesscenter.com';

        // Delete existing to ensure fresh hash if needed
        await User.findOneAndDelete({ email: adminEmail });
        console.log('Old admin user removed (if existed)');

        const admin = new User({
            name: 'USWellnessCenter Admin',
            email: adminEmail,
            password: 'admin123456',
            role: 'admin'
        });

        await admin.save();
        console.log('Fresh admin account created successfully');
        console.log('Email: ' + adminEmail);
        console.log('Password: admin123456');

        process.exit();
    } catch (err) {
        console.error('Error creating admin:', err.message);
        process.exit(1);
    }
};

createAdmin();
