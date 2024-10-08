//create pets button categories
const loadCategories = () => {
  fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    .then((res) => res.json())
    .then((data) => createPetButton(data.categories))
    .catch((error) => console.log('data load error: ', error));
};

loadCategories();


//display pets data in deal section
const loadPetsData = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res) => res.json())
    .then((data) => displayPetsData(data.pets))
    .catch((error) => console.log('data load error', error));
};

loadPetsData();




//get pet data by id in deal section
const getPetData = (getId) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getId}`)
    .then((res) => res.json())
    .then((data) => showModal(data.petData))
    .catch((error) => console.log('data load error', error));
};



