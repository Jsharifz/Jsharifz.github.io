let specie = [];

fetch('https://swapi.co/api/species/').then(function(a) {
    a.json().then(function(data) {
        specie = data.results;
        console.log('data');

        processData();
    });
});

function processData() {
    let specieHtml = '';
    for (item of specie) {
        specieHtml = specieHtml + buildSpecieHtml(item);
    }
    document.querySelector('#specie-list').innerHTML = specieHtml;
}

function buildSpecieHtml(item) {
    return `
        <ul id="species">
            <h1>${item.name}</h1>
            <li>Classification: ${item.classification}</li>
            <li>Designation: ${item.designation}</li>
            <li>Average Height: ${item.average_height}cm</li>
            <li>Average Lifespan: ${item.average_lifespan} years</li>
            <li>Language: ${item.language}</li>
        </ul> 
    `;
}

console.log('end');
