const Service = require('../models/service');

class ServiceController {
    static all() {
        return Service.find({})
            .then((services) => {
                return services;
            });
    }

    static create(new_service) {
        console.log(new_service);
        const service = new Service(new_service);
        return service.save();
    }

    static update(id, data) {
        return Service.findById(id)
            .then((service) => {
                service.set(data);
                service.save();
                return service;
            });
    }

    static read(id) {
        return Service.findById(id)
            .then((service) => {
                return service;
            });
    }

    static delete(id) {
        return Service.findOneAndDelete(id)
            .then((obj) => {
                return obj;
            })
    }
}

module.exports.ServiceController = ServiceController;
