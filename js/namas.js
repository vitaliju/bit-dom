export function apartmentTable(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        HTML += `
        <tr>
           <td>${i + 1}</td>
           <td>${data[i].title}</td>
           <td>${data[i].img}</td>
           <td>${data[i].yearOfConstruction}</td>
           <td>${data[i].rooms}</td>
           <td>${data[i].price}</td>
           <td>${data[i].read}</td>
        </tr>`;
    }
    return `
        <table>
            <thead>
                <tr>
                   <td>#</td>
                   <td>Title</td>
                   <td>Img</td>
                   <td>Year of Construction</td>
                   <td>Rooms</td>
                   <td>Price</td>
                   <td>Read more</td>
                </tr>
            </thead>
            <tbody>${HTML}</tbody>
        </table>`;
}