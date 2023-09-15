const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//A User can have many comments
User.hasMany(Comment, {foreignKey: 'user_id', as: 'comments'});
Comment.belongsTo(User, {foreignKey: 'user_id'});

//A Post can have many comments 
Post.hasMany(Comment, {foreignKey: 'post_id', as: 'comments'});
Comment.belongsTo(Post, {foreignKey: 'post_id'});


module.exports = {
    User,
    Post,
    Comment
};