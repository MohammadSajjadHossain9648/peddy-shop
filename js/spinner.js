function spinner(){
    // Show the spinner animation
    const petContainer = document.getElementById("pet_container");

    petContainer.classList.remove("grid");
    petContainer.innerHTML = `
        <div class="w-2/5 h-auto mx-auto">
            <span class="w-1/2 h-36 loading loading-dots loading-lg"></span>
            <p class="text-5xl font-bold">Loading...</p>
        </div>
    `;

    // Hide the spinner after 2 sec (2000 milliseconds)
    setTimeout(() => {

    }, 2000); // 2 seconds = 2000
}