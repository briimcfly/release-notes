const router = require('express').Router();
const { User } = require('../../models');

// Create a new user
router.post('/', async (req,res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.loggedIn = true;

            console.log("New user created successfully")
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.error("There was a problem creating a new user", err)
        res.status(500).json(err);
    }
});