let starships = [];

fetch('https://swapi.co/api/starships/').then(function(a) {
    a.json().then(function(data) {
        starship = data.results;
        console.log('data');

        processData();
    });
});

function processData() {
    let starshipHtml = '';
    for (item of starship) {
        starshipHtml = starshipHtml + buildStarshipHtml(item);
    }
    document.querySelector('#starship-list').innerHTML = starshipHtml;
}

function buildStarshipHtml(item) {
    return `
        <ul id="starships">
            <h1>${item.name}</h1>
            <li>Model: ${item.model}</li>
            <li>Starship Class: ${item.starship_class}</li>
            <li>Manufacturer: ${item.manufacturer}</li>
            <li>Average Cost: ${item.cost_in_credits} credits</li>
            <li>length: ${item.length} meters</li>
            <li>Maximum Crew Capacity: ${item.crew}</li>
            <li>Maximum Passenger Capacity: ${item.passengers}</li>
        </ul> 
    `;
}

console.log('end');
