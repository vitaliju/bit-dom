const header = document.createElement('header');
header.innerHTML = `
    <header>
        <nav>
            <a href="../">Home</a>
            <a href="../products/">Products</a>
            <a href="../about-us/">About us</a>
            <a href="../contact/">Contact</a>
            <a href="../pokemon/">Pokemon</a>
            <a href="../sportas/">Sportas</a>
            <a href="../automobiliai/">Automobiliai</a>
            <a href="../namai-butai/">Namai</a>
            <a href="../chat/">Chat</a>
        </nav>
    </header>
`;

document.body.prepend(header);

