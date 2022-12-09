let tbody = document.querySelector("tbody"); //selectionne le body

// Appel à l'API JsonPlaceHolder
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        for (user of users) {
            let tr = document.createElement("tr"); //creer un element tr qui est une cellule
            tbody.appendChild(tr); //dans le body insert element tr

            //appel execution de la fonction qui creer une cellule
            createCell(tr, user.id);
            createCell(tr, user.name);
            createCell(tr, user.username);
            createCell(tr, user.email);
            createCell(tr, user.address.street, user.address.suite, user.address.zipcode, user.address.city);
            createCell(tr, user.phone);
            createCell(tr, user.website);
            createCell(tr, user.company.name);
        }
    });

// Création d'une cellule d'un tableau avec comme contenu les arguments qu'on passe en paramètre
// row = l'élément <tr> dans lequel on doit insérer nos cellules <td>
// ...args = récupère tous les arguments suivants row passés en paramètres de la fonction createCell()
function createCell(row, ...args) {
    console.log(args);
    return row.innerHTML += `<td>${args}</td>`;
}
