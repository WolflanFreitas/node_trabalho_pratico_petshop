import OwnerService from "../services/owner.service.js";

async function createOwner(req, res, next) {
    try {
        let owner = req.body;
    
        if(!owner.name || !owner.phone) {
            throw new Error("Owner name and phone are required.");
        }
        owner = await OwnerService.createOwner(owner);
        res.send(owner);
    } catch(error) {
        next(error);
    }
}

async function updateOwner(req, res, next) {
    try {
        let owner = req.body;
    
        if(!owner.name || !owner.phone || !owner.ownerId) {
            throw new Error("Owner id, name and phone are required.");
        }
        owner = await OwnerService.updateOwner(owner);
        res.send(owner);
    } catch(error) {
        next(error);
    }
}

async function getOwners(req, res, next) {
    try {
        res.send(await OwnerService.getOwners());
    } catch(error) {
        next(error);
    }
}

async function getOwner(req, res, next) {
    try {
        const id =  req.params.id;
        res.send(await OwnerService.getOwner(id));
    } catch (error) {
        next(error)
    }
}

async function deleteOwner(req, res, next) {
    try {
        const id =  req.params.id;
        await OwnerService.deleteOwner(id);
    } catch (error) {
        next(error)
    }
}

export default {
    createOwner,
    getOwners,
    getOwner,
    deleteOwner,
    updateOwner
}