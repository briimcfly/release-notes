const { User } = require('../models');

const userData = [
    {
        username: 'john_doe',
        password: 'password123'
    },
    {
        username: 'jane_smith',
        password: 'password456'
    },
    {
        username: 'sarah_connor',
        password: 'terminator789'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;