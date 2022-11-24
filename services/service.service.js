import ServiceRepository from "../repositories/service.repository.js";

async function createService(service) {
    return await ServiceRepository.insertService(service);
}

async function updateService(service) {
    return await ServiceRepository.updateService(service);
}

async function getServices(ownerId) {
    if(ownerId) {
        return await ServiceRepository.getServicesByOwnerId(ownerId);
    }
    return await ServiceRepository.getServices();
}

async function getService(id) {
    return await ServiceRepository.getService(id);
}

async function deleteService(id) {
    await ServiceRepository.deleteService(id);
}

export default {
    createService,
    getServices,
    getService,
    deleteService,
    updateService
}