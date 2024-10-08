function showModal(pet){
    // Show the success modal immediately after clicking details button
    const openModal = document.getElementById("open_modal");
    const div = document.createElement("div");
    div.innerHTML = `
        <input type="checkbox" id="my_modal_6" class="modal-toggle" checked/>
        <div class="modal" role="dialog">
            <!-- single pet card -->
            <div class="modal-box">
                <figure class="h-48">
                    <img class="w-full h-full border-none rounded-lg" src=${pet.image} alt="${pet.pet_name} image">
                </figure>
                <h2 class="card-title my-5 font_inter font-bold text-xl">${pet.pet_name}</h2>
                <div class="text-shade_black_color1">
                    <div class="flex mb-2">
                        <div class="flex w-1/2">
                            <img class="mr-2 w-4" src="images/icons/breed.svg" alt="breed icon image">
                            <p>Breed: ${pet.breed}</p>
                        </div>
                        <div class="flex">
                            <img class="mr-2 w-4" src="images/icons/birth.svg" alt="birth icon image">
                            <p>Birth: ${pet.date_of_birth}</p>
                        </div>
                    </div>
                    <div class="flex mb-2">
                        <div class="flex w-1/2">
                            <img class="mr-2 w-4" src="images/icons/gender.svg" alt="gender icon image">
                            <p>Gender: ${pet.gender}</p>
                        </div>
                        <div class="flex">
                            <img class="mr-2 w-4" src="images/icons/price.svg" alt="price icon image">
                            <p>Price : ${pet.price}$</p>
                        </div>
                    </div>
                    <div class="flex w-1/2">
                        <img class="mr-2 w-4" src="images/icons/gender.svg" alt="gender icon image">
                        <p>Vaccinated status: ${pet.vaccinated_status}</p>
                    </div>
                </div>

                <hr class="border-black_border_color my-3">

                <h2 class="card-title font_inter font-semibold text-sm">Details Information</h2>
                <p class="text-shade_black_color1">${pet.pet_details}</p>

                <button id="close_modal" for="my_modal_6" class="btn w-full border-none rounded-lg bg-green_color text-white_color font-bold py-3 px-6 mt-3">Close</button>
            </div>
        </div>
    `;

    openModal.appendChild(div);

    // Close the success modal immediately after clicking details button
    document.getElementById("close_modal").addEventListener("click", function(){
        openModal.removeChild(div);
    })
}