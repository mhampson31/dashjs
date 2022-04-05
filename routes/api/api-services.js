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

router.get('/:service_id', (req, res, next) => {
    Services.read(req.params.service_id)
        .then((service) => {
            res.status(200);
            res.send(JSON.stringify(service));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
});

router.put('/:service_id', (req, res, next) => {
    Services.update(req.params.service_id, req.body)
        .then((updated_service) => {
            res.status(200);
            res.send(JSON.stringify(updated_service));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
});

router.post('/create', (req, res, next) => {
    let ns = {
        name: req.body.name,
        url: req.body.url,
        category: req.body.category,
        active: req.body.active
    };
    console.log("NS: " + ns);
    Services.create(ns)
        .then((new_service) => {
            res.status(201);
            res.send(JSON.stringify(new_service));
        })
});

router.delete('/:service_id', (req, res, next) => {
    Services.delete(req.params.service_id)
        .then((deleted_service) => {
            res.status(200);
            res.send(JSON.stringify(new_service));
        })
        .catch((err) => {
            res.status(404);
            res.end();
        });
});

module.exports = router
