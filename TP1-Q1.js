 
                                 // **********************Versoin Officiel*********************

let nbLigne = Number(prompt("Quelle Hauteur voulez-vous votre sapin?"));

let espace;

let etoile;


for(let k = 0 ; k < nbLigne ; k++){

    for(let j = 0 ; j <= (nbLigne - k) ; j ++) {
   
        espace = Array(j).fill("&nbsp&nbsp").join(' ');

    }

    for(let i = 0 ; i <= k ; i ++) {

        etoile = Array(i*2 + 1).fill('*').join(' ');

    }

    document.getElementById("pyramide").innerHTML += (espace + etoile + "<br>" );

}


    // **********************   Deux autre version fonctionelle pour te montere qu'on a bien bossé ;)   ***********************


// let nbLigne = Number(prompt("Quelle Hauteur voulez-vous votre sapin?"));

// let etoile = "*";

// for(let k = 0 ; k < nbLigne ; k++){
    
// let espace = "";    
 
//     for(let j = 0 ; j < nbLigne - k ; j ++) {
    
//         espace += ("&nbsp&nbsp");

//     }

//     document.getElementById("pyramide").innerHTML += (espace + etoile + "<br>" );

//     etoile += ("**");

// }



                                     //   **************   Version 3   *****************



// let nbLigne = Number(prompt("Quelle Hauteur voulez-vous votre sapin?"));
// let espace = "&nbsp&nbsp"; 
// let star = "*";
// let contStar = "*";

// for(let i = 0 ; i < nbLigne ; i ++){

//     document.getElementById("pyramide").innerHTML += (espace.repeat(nbLigne-i) + contStar + "<br>" );

//     contStar += star.repeat(2);
// }