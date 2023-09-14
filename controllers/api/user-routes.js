const router = require('express').Router();
const { User } = require('../../models');

console.log(User);

// Create a new user
router.post('/', async (req,res) => {
    console.log("POST request received");
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


module.exports = router;