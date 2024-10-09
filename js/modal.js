// display details modal
function showModal(pet, petId){
    // Show the success modal immediately after clicking details button
    const detailsModal = document.getElementById("details_modal");
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
                    <div class="flex sm:flex-col md:flex-row mb-2">
                        <div class="flex w-1/2 sm:mb-2 md:mb-0">
                            <img class="mr-2 w-4" src="images/icons/breed.svg" alt="breed icon image">
                            <p>Breed: ${pet.breed ? `${pet.breed}` : 'Not specified'}</p>
                        </div>
                        <div class="flex">
                            <img class="mr-2 w-4" src="images/icons/birth.svg" alt="birth icon image">
                            <p>Birth: ${pet.birth ? `${pet.birth}` : 'Unavailable'}</p>
                        </div>
                    </div>
                    <div class="flex sm:flex-col md:flex-row mb-2">
                        <div class="flex w-1/2 sm:mb-2 md:mb-0">
                            <img class="mr-2 w-4" src="images/icons/gender.svg" alt="gender icon image">
                            <p>Gender: ${pet.gender ? `${pet.gender}` : 'Not provided'}</p>
                        </div>
                        <div class="flex">
                            <img class="mr-2 w-4" src="images/icons/price.svg" alt="price icon image">
                            <p>Price: ${pet.price ? `${pet.price}` : 'Not mentioned'}</p>
                        </div>
                    </div>
                    <div class="flex w-1/2 sm:mb-2 md:mb-0">
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

    detailsModal.appendChild(div);

    // Close the success modal immediately after clicking details button
    document.getElementById("close_modal").addEventListener("click", function(){
        detailsModal.removeChild(div);
    })
}






// display success adopt modal
function showAdoptModal(pet, petId){
    // Show the success modal immediately after clicking adopt button
    const adoptModal = document.getElementById("adopt_modal");
    const div = document.createElement("div");

    div.innerHTML = `
        <input type="checkbox" id="my_modal_${petId}" class="modal-toggle"/>
        <div class="modal" role="dialog">
            <!-- single pet card -->
            <div class="modal-box flex flex-col justify-center items-center">
                <figure class="w-full h-48">
                    <img class="w-full h-full border-none rounded-lg" src=${pet.image} alt="${pet.pet_name} image">
                </figure>
                <h2 class="card-title my-5 font_inter font-bold text-xl mx-auto">Adopt ${pet.pet_name} successfully</h2>
                <figure class="h-32">
                    <img class="w-full h-full border-none rounded-lg" src="images/icons/handshake.png" alt="handshake icon image">
                </figure>
                <div>
                    <p class="my-4 font-semibold text-sm">Your pet will be adopted in approximately <span id="timer">3</span> seconds</p>
                </div>

                <h2 class="card-title font_inter font-semibold text-sm text-center">Thank you for choosing us to find your new furry friend! We're confident you'll have many happy moments together.</h2>

                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </div>
        </div>
    `;

    adoptModal.appendChild(div);


    // To open the modal (by checking the checkbox)
    function openModal() {
        startTimer(petId);
        document.getElementById(`disable_adopt_btn_${petId}`).innerText = "Adopted";
        document.getElementById(`disable_adopt_btn_${petId}`).disabled = true;
        document.getElementById(`my_modal_${petId}`).checked = true;
    }
    openModal();
}