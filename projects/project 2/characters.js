let character = [];

fetch('https://swapi.co/api/people/').then(function(a) {
    a.json().then(function(data) {
        character = data.results;
        console.log('data');

        processData();
    });
});

function processData() {
    let characterHtml = '';
    for (item of character) {
        characterHtml = characterHtml + buildCharacterHtml(item);
    }
    document.querySelector('#character-list').innerHTML = characterHtml;
}

function buildCharacterHtml(item) {
    return `
        <ul id="characters">
            <h1>${item.name}</h1>
            <li>Gender: ${item.gender}</li>
            <li>Birth Year: ${item.birth_year}</li>
            <li>Height: ${item.height}cm</li>
            <li>Weight: ${item.mass}kg</li>
            <li>Hair Color: ${item.hair_color}</li>
            <li>Eye Color: ${item.eye_color}</li>
        </ul> 
    `;
}

console.log('end');
