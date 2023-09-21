const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes)

// renders log in form
router.get("/login", async (req, res) => {
    res.render("login");
  });

module.exports = router;