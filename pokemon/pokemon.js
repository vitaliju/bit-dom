const pokemonData = [
    {
        img: "./img-pokemon/bulba.png",
        name: 'Bulbasaur',
        type: 'Grass Poison',
        species: 'Seed Pokemon',
        weight: '6.9kg',
        link: "https://pokemondb.net/pokedex/bulbasaur",
    },
    {
        img: "./img-pokemon/charm.png",
        name: 'Charmeleon',
        type: 'Fire',
        species: 'Flame Pokemon',
        weight: '19kg',
        link: "https://pokemondb.net/pokedex/charmeleon",
    },
    {
        img: "./img-pokemon/wart.png",
        name: 'Wartortle',
        type: 'Water',
        species: 'Turtle Pokemon',
        weight: '22.5kg',
        link: "https://pokemondb.net/pokedex/wartortle",
    },
    {
        img: "./img-pokemon/pidgeot.png",
        name: 'Pidgeot',
        type: 'Noraml Flying',
        species: 'Bird Pokemon',
        weight: '39.5kg',
        link: "https://pokemondb.net/pokedex/pidgeot",
    },
    {
        img: "./img-pokemon/raichu.png",
        name: 'Raichu',
        type: 'Electric',
        species: 'Mouse Pokemon',
        weight: '30kg',
        link: "https://pokemondb.net/pokedex/raichu",
    },
    {
        img: "./img-pokemon/rattata.png",
        name: 'Rattata',
        type: 'Normal',
        species: 'Mouse Pokemon',
        weight: '3.5kg',
        link: "https://pokemondb.net/pokedex/rattata",
    },
    {
        img: "./img-pokemon/vulpix.png",
        name: 'Vulpix',
        type: 'Fire',
        species: 'Fox Pokemon',
        weight: '9.9kg',
        link: "https://pokemondb.net/pokedex/vulpix",
    },
    {
        img: "./img-pokemon/meowth.png",
        name: 'Meowth',
        type: 'Normal',
        species: 'Scratch Cat Pokemon',
        weight: '4.2kg',
        link: "https://pokemondb.net/pokedex/meowth",
    },
    {
        img: "./img-pokemon/psyduck.png",
        name: 'Psyduck',
        type: 'Water',
        species: 'Duck Pokemon',
        weight: '19.6kg',
        link: "https://pokemondb.net/pokedex/psyduck",
    },
    {
        img: "./img-pokemon/rapidash.png",
        name: 'Rapidash',
        type: 'Fire',
        species: 'Fire Horse Pokemon',
        weight: '95kg',
        link: "https://pokemondb.net/pokedex/rapidash",
    },
];

const mainDOM = document.getElementById('main');

let mainHTML = '';
for (const data of pokemonData) {
    mainHTML += `
    <article>
        <img src="${data.img}" alt="">
        <p>${data.name}</p>
        <p>${data.type}</p>
        <p>${data.species}</p>
        <p>${data.weight}</p>
        <a href="${data.link} target="_blank">Read more</a>
    </article>`;
}
mainDOM.innerHTML = mainHTML;