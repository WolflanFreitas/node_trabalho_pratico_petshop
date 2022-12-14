import OwnerRepository from "../repositories/owner.repository.js";

async function createOwner(owner) {
    return await OwnerRepository.insertOwner(owner);
}

async function updateOwner(owner) {
    return await OwnerRepository.updateOwner(owner);
}

async function getOwners() {
    return await OwnerRepository.getOwners();
}

async function getOwner(id) {
    return await OwnerRepository.getOwner(id);
}

async function deleteOwner(id) {
    await OwnerRepository.deleteOwner(id);
}

export default {
    createOwner,
    getOwners,
    getOwner,
    deleteOwner,
    updateOwner
}