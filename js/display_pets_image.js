//display pets data in deal section
const displayPetsImage = (petImage) => {
    const petImageContainer = document.getElementById("pet_image_container");

    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${petImage}" alt="Pet Image" class="w-full h-20 rounded-lg" />
    `;

    petImageContainer.append(div);
}