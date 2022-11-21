async function createOwner(req, res, next) {
    try {
        let owner = req.body;
    
        if(!owner.name || !owner.phone) {
            throw new Error("Owner name and phone are required.");
        }
        res.send(owner);
    } catch(error) {
        next(error);
    }
}

export default {
    createOwner
}