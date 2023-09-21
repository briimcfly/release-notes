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
        res.status(500).json({message: "Internal Server Error"});
    }
});

// Let a user Login 
router.post('/login', async(req, res) => {
    //User Username
    let userData;
    try{
        userData = await User.findOne({
            where: {
                username: req.body.username
            }
        });
    }catch (err) {
        console.error("There was an issue finding Username", err)
        return res.status(500).json({message: "Internal Server Error"})
    };

    //Bad Username 
    if (!userData) {
        return res.status(400).json({message: 'Incorrect Username or Password'});
    };

    //User Password 
    let userPass;

    try{
        userPass = await userData.checkPassword(req.body.password);
    } catch(err){
        console.error("There was an issue checking password", err)
        return res.status(500).json({message: "Internal Server Error"});
    };

    //Bad password
    if (!userPass) {
        return res.status(400).json({message: 'Incorrect Username or Password'});
    };

    //Save Session
    req.session.save(err => {
        if (err) {
            console.error("There was an issue saving session", err)
            return res.status(500).json({message: "Internal Server Error"});
        }
        req.session.loggedIn = true;
        res.status(200).json({message: "User successfully logged in"})
    }); 
});

//Let a user log out 
router.post("/logout", async (req, res) => {
    req.session.destroy(() => {
        res.status(204).end();
    });
});

module.exports = router;