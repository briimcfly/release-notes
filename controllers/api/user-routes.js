const router = require('express').Router();
const { User } = require('../../models');

// Create a new user
router.post('/', async (req,res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        //TODO: Add the REQ.SAVE stuff here.. then put the res.status below in the {} of that req.save
            console.log("New user created successfully")
            res.status(200).json(dbUserData);
    } catch (err) {
        console.error("There was a problem creating a new user", err)
        res.status(500).json(err);
    }
});

// Let a user Login 
router.post('/login', async(req, res) => {
    try{
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        
        //No User found
        if (!userData) {
            res.status(400).json({message: 'Incorrect Username'});
        }

        const userPass = await userData.checkPassword(req.body.password);

        if (!userPass) {
            res.status(400).json({message: 'Incorrect Password'});
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.isSoftDeleted;
            res.status(200).json({message: "User successfully logged in"});
        })

    }catch (err) {
        console.error("There was a problem logging in", err)
        res.status(500).json(err)
    }
})

module.exports = router;