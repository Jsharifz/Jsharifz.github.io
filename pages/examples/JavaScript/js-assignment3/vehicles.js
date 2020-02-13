let vehicle = [];

fetch('https://swapi.co/api/vehicles/').then(function(a) {
    a.json().then(function(data) {
        vehicle = data.results;
        console.log('data');

        processData();
    });
});

function processData() {
    let vehicleHtml = '';
    for (item of vehicle) {
        vehicleHtml = vehicleHtml + buildVehicleHtml(item);
    }
    document.querySelector('#vehicle-list').innerHTML = vehicleHtml;
}

function buildVehicleHtml(item) {
    return `
        <ul id="vehicles">
            <h1>${item.name}</h1>
            <li>Model: ${item.model}</li>
            <li>Vehicle Class: ${item.vehicle_class}</li>
            <li>Manufacturer: ${item.manufacturer}</li>
            <li>Average Cost: ${item.cost_in_credits} credits</li>
            <li>length: ${item.length} meters</li>
            <li>Maximum Crew Capacity: ${item.crew}</li>
            <li>Maximum Passenger Capacity: ${item.passengers}</li>
        </ul> 
    `;
}

console.log('end');
