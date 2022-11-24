import Owner from "../models/owner.model.js"

async function insertOwner(owner) {
    try {
        return await Owner.create(owner);
    } catch (error) {
        throw error;
    } 
}

async function updateOwner(owner) {
    try {
        await Owner.update(owner, {
            where: {
                ownerId: owner.ownerId
            }
        });
        return await getOwner(owner.ownerId);
    } catch (error) {
        throw error;
    }
}

async function getOwners() {
    try {
        return await Owner.findAll({
            order: [
                ['ownerId','ASC']
            ]
        });
    } catch (error) {
        throw error;
    } 
}

async function getOwner(id) {
    try {
        return await Owner.findByPk(id);
    } catch (error) {
        throw error;
    } 
}

async function deleteOwner(id) {
    try {
        await Owner.destroy({
            where: {
                ownerId: id
            }
        });
    } catch (error) {
        throw error;
    }
}


export default {
    insertOwner,
    getOwners,
    getOwner,
    deleteOwner,
    updateOwner
}