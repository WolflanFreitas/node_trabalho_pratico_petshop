import AnimalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal) {
    return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
    return await AnimalRepository.updateAnimal(animal);
}

async function getAnimals(owner_id) {
    if(owner_id) {
        return await AnimalRepository.getAnimalsByOwnerId(owner_id);
    } 
    return await AnimalRepository.getAnimals();
}

async function getAnimal(id) {
    return await AnimalRepository.getAnimal(id);
}

async function deleteAnimal(id) {
    return await AnimalRepository.deleteAnimal(id);
}

export default {
    createAnimal,
    getAnimals,
    getAnimal,
    deleteAnimal,
    updateAnimal
}