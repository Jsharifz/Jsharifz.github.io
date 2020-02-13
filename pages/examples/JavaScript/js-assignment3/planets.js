let planet = [];

fetch('https://swapi.co/api/planets/').then(function(a) {
    a.json().then(function(data) {
        planet = data.results;
        console.log('data');

        processData();
    });
});

function processData() {
    let planetHtml = '';
    for (item of planet) {
        planetHtml = planetHtml + buildPlanetHtml(item);
    }
    document.querySelector('#planet-list').innerHTML = planetHtml;
}

function buildPlanetHtml(item) {
    return `
        <ul id="planets">
            <h1>${item.name}</h1>
            <li>Day Length: ${item.rotation_period} hours</li>
            <li>Year Length: ${item.orbital_period} days</li>
            <li>Diameter: ${item.diameter} m</li>
            <li>Climate: ${item.climate}</li>
            <li>Gravity (g): ${item.gravity}</li>
            <li>Surface Water Content: ${item.surface_water}%</li>
            <li>Population: ${item.population} residents</li>
        </ul> 
    `;
}

console.log('end');
