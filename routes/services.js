const express = require('express');
const flash = require('connect-flash');

// require models

const router = express.Router();
router.use(flash());


router.get('/', async (req, res, next) => {
    res.render('main', {
    })
});


router.use(function(err, req, res, next) {
    console.error(err.stack);
    next(err);
});

module.exports = router;
