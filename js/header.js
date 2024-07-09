const data = [
    {href: '', text: 'Home'},
    {href: 'about-us', text: 'About'},
    {href: 'chat', text: 'Chat'},
    {href: 'products', text: 'Products'},
    {href: 'sportas', text: 'Sport'},
    {href: 'pokemon', text: 'Pokemon'},
    {href: 'automobiliai', text: 'Auto'},
    {href: 'namai-butai', text: 'Apartment'},
    {href: 'contact', text: 'Contact'},
];

export function header(isHomepage = false) {
    const dot = isHomepage ? '' : '.';

    let navHTML = '';

    for (const item of data) {
        navHTML += `<a href="${dot}./${item.href}">${item.text}</a>`;
    }
    
    document.body.insertAdjacentHTML('afterbegin', `
        <header>
            <img src="#" alt="Logo">
            <nav>${navHTML}</nav>
        </header>`);
}