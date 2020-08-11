// setup and initialization
const options = [
    'POSITIVE',
    'NEGATIVE',
    'NEUTRAL'
];

let selected = 'POSITIVE';


// Selectors
const optionsElement = document.getElementById("options");
const contentElement = document.getElementById("content");
const formElement = document.getElementById("form1");
const inputElement = document.getElementById("input-element");


// utility functions
function render() {
    optionsElement.innerHTML = "";
    options.forEach(option => {
        optionsElement.innerHTML +=
            `<span class="option ${option== selected ? "selected" : ''}" data-rating='${option}'>${option}</span>`

    });
    let changeCase = selected.toLowerCase();
    contentElement.innerText = changeCase.replace(changeCase[0], changeCase[0].toUpperCase()) + " content"

}

// eventlisteners and triggers
optionsElement.addEventListener('click', e => {
    selected = e.target.dataset.rating;
    render();
})
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputElement.value < 1 || inputElement.value > 3) {
        alert("Index is Invalid");

    } else {
        let index = inputElement.value - 1;
        selected = optionsElement.childNodes[index].textContent;
        render();
    }
})

render();