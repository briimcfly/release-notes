const router = require('express').Router();
const {Post, Comment, User} = require('../../models')

router.get('/:id', async(req,res)=>{
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { 
                    model: User
                },
                { 
                    model: Comment, 
                    as: 'comments',
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                 }
            ]
        });
        const post = await postData.get({ plain: true });

        res.render('single-post', {
            post
        });
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;