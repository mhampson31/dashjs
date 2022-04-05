var express = require('express');
var router = express.Router();
const serviceController = require('../../controllers/serviceController');

const Services = serviceController.ServiceController;

router.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers",
        'Content-type':'application/json'
    });
    if(req.method == 'OPTIONS') {
      return res.status(200).end();
    }
    next();
})

router.get('/', (req, res, next) => {
  Services.all()
    .then((services) => {
      console.log(`API: Found services: ${services}`);
      res.status(200);
      res.send(JSON.stringify(services));
    })
});

module.exports = router
