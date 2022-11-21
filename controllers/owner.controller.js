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

export default {
    createOwner
}