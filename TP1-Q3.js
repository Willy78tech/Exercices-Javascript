                         
                                  // boucle qui demande deux chiffres aléatoires entre 0 et 15

do {
    
    var nb1 =  Math.floor (Math.random()*15);
    var nb2 =  Math.floor (Math.random()*15);

    while(reponse != "q" && reponse != nb1 + nb2){
           var reponse = (prompt("Quelle est la somme de : "  + nb1 +"+" + nb2));
    }

}while( reponse == nb1 + nb2);


