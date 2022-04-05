const express = require('express');
const flash = require('connect-flash');

// require models

const router = express.Router();
router.use(flash());

router.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    });
    if(req.method == 'OPTIONS') {
      return res.status(200).end();
    }
    next();
})

router.get('/', async (req, res, next) => {
    res.render('main', {
    })
});


router.use(function(err, req, res, next) {
    console.error(err.stack);
    next(err);
});

module.exports = router;
