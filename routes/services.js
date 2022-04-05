const express = require('express');
const flash = require('connect-flash');

// require models

const router = express.Router();
router.use(flash());


router.get('/', async (req, res, next) => {
    Service.find({})
    .then((services) => {
        res.render('main', {
            services: services
        })
    })

});


router.use(function(err, req, res, next) {
    console.error(err.stack);
    next(err);
});

module.exports = router;
