const { Comment } = require('../models');

const commentData = [
    {
        text: 'Great post!',
        user_id: 2,
        post_id: 1
    },
    {
        text: 'Thanks for sharing!',
        user_id: 3,
        post_id: 2
    },
    {
        text: 'Interesting read.',
        user_id: 1,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;