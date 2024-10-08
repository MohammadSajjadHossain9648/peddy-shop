async function showSpinner(){
    const spinner = document.getElementById('pet_container');

    const [data] = await Promise.all([
        fetch('https://api.example.com/data').then(res => res.json()),
        new Promise(r => setTimeout(r, 2000))
    ]);

    spinner.classList.add('hidden');
    document.getElementById('dataContainer').textContent = JSON.stringify(data);
}