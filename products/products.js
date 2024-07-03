// <button type="button">Click me</button>

const allFormsDOM = document.getElementsByTagName('form');

const formDOM1 = allFormsDOM[0];
formDOM1.innerHTML = '<button type="button">Click me</button>';

const formDOM2 = allFormsDOM[1];
formDOM2.innerHTML += '<button type="button">Click me2</button>';

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.products-list');
console.log(ulDOM);

const products = [
    {
        title: 'Duona',
        count: 1,
    },
    {
        title: 'Sviestas',
        count: 1,
    },
    {
        title: 'Pomidoras',
        count: 3,
    },
    {
        title: 'Agurkas',
        count: 1,
    },
    {
        title: 'Grietinė',
        count: 2,
    },
    {
        title: 'Arbata',
        count: 1,
    },
];
let HTML = '';
for (let i = 0; i < products.length; i++) {
    HTML += `
    <li>
    <p class="title">${products[i].title}</p>
    <p class="count">${products[i].count}</p>
    </li>`;
}
ulDOM.innerHTML = HTML;

const allParsDOM = document.querySelectorAll('main > p');
console.log(allParsDOM);

allParsDOM[1].innerText = allParsDOM[1].innerText.toUpperCase();

const redElementsDOM = document.querySelectorAll('.red');

for (const redDOM of redElementsDOM) {
    redDOM.style.backgroundColor = 'red';
    redDOM.style.fontSize = '1.5rem';
}
