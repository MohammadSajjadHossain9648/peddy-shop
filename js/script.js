//create pets button categories
const loadCategories = async() => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        const data = await res.json();
        createPetButton(data.categories);
    }
    catch(err) {
        console.log('data load error: ', err);
    }
};

loadCategories();


//display all pets data in deal section
const loadPetsData = async() => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        const data = await res.json();
        displayPetsData(data.pets);
    }
    catch(err) {
        console.log('data load error: ', err);
    }
};

loadPetsData();




// show spinner animation in display pet data container before display all pets data when the page loads
window.addEventListener('DOMContentLoaded', () => {
    spinner();
});




//get pet data by id in deal section
const getPetData = async(getId) => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getId}`)
        const data = await res.json();
        showModal(data.petData)
    }
    catch(err) {
        console.log('data load error: ', err);
    }
};




//get adopt pet by id in deal section
const getAdoptPet = async(getId) => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getId}`)
        const data = await res.json();
        showAdoptModal(data.petData, getId)
    }
    catch(err) {
        console.log('data load error: ', err);
    }
};




//get pet image by id in deal section
const getPetImage = async(getId) => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${getId}`)
        const data = await res.json();
        displayPetsImage(data.petData.image)
    }
    catch(err) {
        console.log('data load error: ', err);
    }
};



