
//const APIKEY = "https://www.omdbapi.com/?s=batman&apikey=f6e256e1";

let movieNameRef = document.getElementById("movie-name");

let searchBtn = document.getElementById("search-btn");

let result = document.getElementById("result");


//fonction fetch data qui va interroger API

let getMovie = () => {
    let movieName = movieNameRef.value;

    let url = "http://www.omdbapi.com/?t=the+dark+knight&apikey=f6e256e1"; //on initialise appel a API

    if (movieName.length <= 0) {// 
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`; //si aucun film on envoi un message
      }
      //If champ rempli
      else {
        fetch(url) //on fetch url
          .then((resp) => resp.json())
          .then((data) => {
            //If movie exists in database
            if (data.Response) {
              result.innerHTML = `
                <div class="info">
                    <img src=${data.Poster} class="poster"> <!-- on rempli les donnees fourni par API -->
                    <div>
                        <h2>${data.Title}</h2>
                        
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(",").join("</div><div>")}</div>
                        </div>
                    </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
                
            `;
            }
            //If film existe pas dans la base 
            else {
              result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
            }
          })
          //If error occurs
          .catch(() => {
            result.innerHTML = `<h3 class="msg">Erreurs de traitement</h3>`;
          });
      }
    };
    searchBtn.addEventListener("click", getMovie);
    window.addEventListener("load", getMovie);


    
   