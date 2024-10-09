//create adopt category button section
const createPetButton = (categories) => {
    const petBtnContainer = document.getElementById("pet_btn_container");
    categories.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <button id="btn_${item.id}" onclick="loadButtonRelatedCard(${item.id})" class="btn sm:h-20 sm:w-36 md:w-48 lg:h-24 lg:w-60">
                <img class="sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14" src=${item.category_icon} alt="${item.category} icon image">
                <p class="sm:text-sm md:text-lg lg:text-xl font-bold font_inter">${item.category}s</p>
            </button>
        `;
        petBtnContainer.append(div);
    })
}


//after click adopt category button show button related cards which display in deal section
const loadButtonRelatedCard = (id) => {
    //step 1: show the spinner animation
    spinner();

    //step 2: give the button related all pets data
    let url = "";
    if(id === 1){
        url = "https://openapi.programming-hero.com/api/peddy/category/cat";
    }
    else if(id === 2){
        url = "https://openapi.programming-hero.com/api/peddy/category/dog";
    }
    else if(id === 3){
        url = "https://openapi.programming-hero.com/api/peddy/category/rabbit";
    }
    else{
        url = "https://openapi.programming-hero.com/api/peddy/category/bird";
    }

    fetch(url)
    .then((res) => res.json())
    .then((data) => displayPetsData(data.data))
    .catch((error) => console.log('data load error', error));


    //step 3: active button style for clicked one of pets button categories
    activeButtonStyle(id);
}