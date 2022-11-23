import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
    try {
        let animal = req.body;
    
        if(!animal.name || !animal.type || !animal.ownerId) {
            throw new Error("Animal ownerId, name and type are required.");
        }
        animal = await AnimalService.createAnimal(animal);
        res.send(animal);
    } catch(error) {
        next(error);
    }
}

async function updateAnimal(req, res, next) {
    try {
        let animal = req.body;
    
        if(!animal.name || !animal.type || !animal.ownerId || !animal.animalId) {
            throw new Error("Animal id, name, type and ownerId are required.");
        }
        animal = await AnimalService.updateAnimal(animal);
        res.send(animal);
    } catch(error) {
        next(error);
    }
}

async function getAnimals(req, res, next) {
    try {
        const ownerId = req.query.ownerId;
        res.send(await AnimalService.getAnimals(ownerId));
    } catch(error) {
        next(error);
    }
}

async function getAnimal(req, res, next) {
    try {
        const id =  req.params.id;
        res.send(await AnimalService.getAnimal(id));
    } catch (error) {
        next(error)
    }
}

async function deleteAnimal(req, res, next) {
    try {
        const id =  req.params.id;
        await AnimalService.deleteAnimal(id);
        res.end();
    } catch (error) {
        next(error)
    }
}
export default {
    createAnimal,
    getAnimals,
    getAnimal,
    deleteAnimal,
    updateAnimal
}