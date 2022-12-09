/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users)
        displayUsers(users);
    }).catch((err) =>{
        console.log("il y a une erreur " + err)
    })

//fonction displayUsers prend en param users 
    function displayUsers(users){

        const div = document.querySelector("#users");
        
        users.forEach(user =>{
            const usersListes = document.createElement("div");

            usersListes.innerHTML = `${user.name} ${user.surname}`;

            div.appendChild(usersListes);


        })

    }

*/


//fonction search qui affiche les utilisateurs
    function search() {
        let queryURL = "https://jsonplaceholder.typicode.com/users";
    
        fetch(queryURL)
                .then(function (response) {
                    // response.json() returns a json string,
                    // returning it will convert it 
                    // to a pure JavaScript 
                    // object for the next then's callback
                    return response.json();
                })
                .then(function (users) {
                    // users is a JavaScript object here
                    displayUsersAsATable(users);
                })
                .catch(function (error) {
                    console.log('Error during fetch: ' + error.message);
                });
    }
    
    function displayUsersAsATable(users) {
        // users is a JavaScript object
    
        // empty the div that contains the results
        var usersDiv = document.querySelector("#users");
        usersDiv.innerHTML = "";
    
        // creates and populate the table with users
        var table = document.createElement("table");
    
        // iterate on the array of users
        users.forEach(function (currentUser) {
            // creates a row
            var row = table.insertRow();
            // insert cells in the row
            var nameCell = row.insertCell();
            nameCell.innerHTML = currentUser.name;
            var cityCell = row.insertCell();
            cityCell.innerHTML = currentUser.address.city;
        });
    
        // adds the table to the div
        usersDiv.appendChild(table);
    }
