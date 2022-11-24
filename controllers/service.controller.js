import ServiceService from "../services/service.service.js";

async function createService(req, res, next) {
    try {
        let service = req.body;
    
        if(!service.description || !service.value || !service.animalId) {
            throw new Error("Service description, value and animalId are required.");
        }
        service = await ServiceService.createService(service);
        res.send(service);
    } catch(error) {
        next(error);
    }
}

async function updateService(req, res, next) {
    try {
        let service = req.body;
    
        if(!service.description || !service.value || !service.animalId || !service.serviceId) {
            throw new Error("Service id, description, value and animalId are required.");
        }
        service = await ServiceService.updateService(service);
        res.send(service);
    } catch(error) {
        next(error);
    }
}

async function getServices(req, res, next) {
    try {
        res.send(await ServiceService.getServices(req.query.ownerId));
    } catch(error) {
        next(error);
    }
}

async function getService(req, res, next) {
    try {
        const id =  req.params.id;
        res.send(await ServiceService.getService(id));
    } catch (error) {
        next(error);
    }
}

async function deleteService(req, res, next) {
    try {
        const id =  req.params.id;
        await ServiceService.deleteService(id);
        res.end();
    } catch (error) {
        next(error);
    }
}

export default {
    createService,
    getServices,
    getService,
    deleteService,
    updateService
}