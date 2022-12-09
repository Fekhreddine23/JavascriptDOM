const link = document.querySelector('a'); //selectionne ts les a href;

link.textContent = 'Mozilla Developer Network';

link.href = 'https://developer.mozilla.org';


console.log(link);

//on fait reference a notre element section
const sect = document.querySelector('section');


//creer un nouveau paragraphe
const para = document.createElement('p');

//on lui ajoute du texte
para.textContent = 'We hope you enjoyed the ride.';

//on ajoute ce paragraphe a la fin de la section
sect.appendChild(para);

//on ajoute un noeud au premiere paragraphe
const text = document.createTextNode(' — the premier source for web development knowledge.');


//Puis, après avoir récupéré une référence au premier paragraphe, ajoutons-y le nœud texte
const linkPara = document.querySelector('p');
linkPara.appendChild(text);


//déplacer le premier paragraphe de notre exemple au bas de la section
sect.appendChild(linkPara);


//Supprimer des éléments est également plutôt simple, dès lors qu'on a une référence de l'élément à supprimer et de son parent
//sect.removeChild(linkPara);


//Si vous souhaitez un élément uniquement à partir d'une référence à cet élément
//linkPara.remove();


/*MANIPULATION DU CSS

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
*/


//setAttribut methode pour definir une class et sa valeur
para.setAttribute('class', 'highlight');