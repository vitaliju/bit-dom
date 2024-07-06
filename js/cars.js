export function carsTable(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        HTML += `
        <tr>
           <td>${i + 1}</td>
           <td>${data[i].title}</td>
           <td>${data[i].img}</td>
           <td>${data[i].engineVolume}</td>
           <td>${data[i].gearbox}</td>
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
                   <td>Engine Volume</td>
                   <td>Gearbox</td>
                   <td>Price</td>
                   <td>Read more</td>
                </tr>
            </thead>
            <tbody>${HTML}</tbody>
        </table>`;
}