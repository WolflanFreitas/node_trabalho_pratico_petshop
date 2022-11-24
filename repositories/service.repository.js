import Service from "../models/service.model.js"

async function insertService(service) {
    try {
        return await Service.create(service);
    } catch (error) {
        throw error;
    } 
}

async function updateService(service) {
    try {
        await Service.update(service, {
            where: {
                serviceId: service.serviceId
            }
        });
        return await getService(service.serviceId);
    } catch (error) {
        throw error;
    }
}

async function getServices() {
    try {
        return await Service.findAll({
            order: [
                ['serviceId','ASC']
            ]
        });
    } catch (error) {
        throw error;
    } 
}

async function getService(id) {
    try {
        return await Service.findByPk(id);
    } catch (error) {
        throw error;
    } 
}

async function deleteService(id) {
    try {
        await Service.destroy({
            where: {
                serviceId: id
            }
        });
    } catch (error) {
        throw error;
    }
}


export default {
    insertService,
    getServices,
    getService,
    deleteService,
    updateService
}