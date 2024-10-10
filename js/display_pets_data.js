//display pets data in deal section
const displayPetsData = (pets) => {
    const petContainer = document.getElementById("pet_container");
    petContainer.innerHTML = "";
    petContainer.classList = "w-4/5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4";

    // no data found card
    if(pets.length == 0) {
        petContainer.classList.remove("grid");
        petContainer.innerHTML = `
            <div class="bg-black_bg_color">
                <div class="hero sm:py-8 md:py-12 lg:py-20">
                    <div class="hero-content text-center">
                      <div class="max-w-md">
                        <figure class="w-20 h-20 md:w-32 md:h-32 mx-auto mb-6">
                            <img class="w-full h-full" src="images/error.webp" alt="error icon image">
                        </figure>
                        <h1 class="text-2xl font_inter font-bold">No Information Available</h1>
                        <p class="text-shade_black_color1 pt-3">
                            Please note that the required information is currently unavailable. Check back later or seek alternative sources for further details.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // Loop through each pet object and create a card for each one
    pets.forEach(pet => {
        // Create a new div element for each post
        const petCard = document.createElement("div");
        petCard.classList = "card pet_card p-4 border border-black_border_color rounded-lg";

        petCard.innerHTML = `
            <figure class="border-none rounded-lg">
                <img src="${pet.image}" alt="pet image">
            </figure>
            <div class="card-body p-0">
                <h2 class="card-title mt-5 font_inter font-bold text-base">${pet.pet_name}</h2>
                <div class="text-shade_black_color1">
                    <div class="flex mb-2">
                        <img class="mr-2 w-4" src="images/icons/breed.svg" alt="breed icon image">
                        <p>Breed: ${pet.breed ? `${pet.breed}` : 'Not specified'}</p>
                    </div>
                    <div class="flex mb-2">
                        <img class="mr-2 w-4" src="images/icons/birth.svg" alt="birth icon image">
                        <p>Birth: ${pet.birth ? `${pet.birth}` : 'Unavailable'}</p>
                    </div>
                    <div class="flex mb-2">
                        <img class="mr-2 w-4" src="images/icons/gender.svg" alt="gender icon image">
                        <p>Gender: ${pet.gender ? `${pet.gender}` : 'Not provided'}</p>
                    </div>
                    <div class="flex mb-2">
                        <img class="mr-2 w-4" src="images/icons/price.svg" alt="price icon image">
                        <p id="pet_price">Price: ${pet.price ? `${pet.price}$` : 'Not mentioned'}</p>
                    </div>
                </div>

                <hr class="border-black_border_color mb-3">

                <div class="card-actions flex">
                    <button onclick="getPetImage(${pet.petId})" class="btn px-2 md:px-3 py-2 border border-green_border_color bg-white_color rounded-md"><img src="images/icons/like.svg" alt="like icon image"></button>
                    <button id="disable_adopt_btn_${pet.petId}" onclick="getAdoptPet(${pet.petId})" class="btn px-3 md:px-4 py-2 text-sm font-bold text-green_color border border-green_border_color bg-white_color rounded-md">Adopt</button>
                    <button onclick="getPetData(${pet.petId})" class="btn px-3 md:px-4 py-2 text-sm font-bold text-green_color border border-green_border_color bg-white_color rounded-md">Details</button>
                </div>
            </div>
        `;

        petContainer.appendChild(petCard);
    });
}