//create pets button categories
const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    .then((res) => res.json())
    .then((data) => createPetButton(data.categories))
    .catch((error) => console.log('data load error: ', error));
};

loadCategories();


//display all pets data in deal section
const loadPetsData = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res) => res.json())
    .then((data) => displayPetsData(data.pets))
    .catch((error) => console.log('data load error', error));
};

loadPetsData();




// show spinner animation in display pet data container before display all pets data when the page loads
window.addEventListener('DOMContentLoaded', () => {
    spinner();
});




//get pet data by id in deal section
const getPetData = (getId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getId}`)
    .then((res) => res.json())
    .then((data) => showModal(data.petData))
    .catch((error) => console.log('data load error', error));
};




//get adopt pet by id in deal section
const getAdoptPet = (getId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getId}`)
    .then((res) => res.json())
    .then((data) => showAdoptModal(data.petData, getId))
    .catch((error) => console.log('data load error', error));
};




//get pet image by id in deal section
const getPetImage = (getId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getId}`)
    .then((res) => res.json())
    .then((data) => displayPetsImage(data.petData.image))
    .catch((error) => console.log('data load error', error));
};



