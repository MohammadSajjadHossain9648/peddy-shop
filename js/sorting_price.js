// Sorting based on price tag in display pet data container
document.getElementById('Sorting_price_btn').addEventListener('click', function () {
    const petContainer = document.getElementById('pet_container');
    const cards = Array.from(petContainer.querySelectorAll('.pet_card'));

    function sortCardsByPrice() {
        const sortedCards = cards.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p#pet_price').textContent.replace('Price: ', '').replace('$', '').trim());
            const priceB = parseFloat(b.querySelector('p#pet_price').textContent.replace('Price: ', '').replace('$', '').trim());
            return priceA - priceB;
        });

        petContainer.innerHTML = '';
        sortedCards.forEach(card => {
            petContainer.appendChild(card);
        });

    }

    // Call the function to sort the cards when the js file runs
    sortCardsByPrice();
});