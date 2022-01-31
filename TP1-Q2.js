let nbPizza;
let choix;
let pizza;
let total;
let rabais = 0;
let quartier;
let fete;
let prixLivraison = 0;

do{

    nbPizza = Number ( prompt ( "Combien de pizzas désirez-vous? "));

}while( isNaN(nbPizza));


do{
    choix = Number (prompt ("Quelle choix désirez-vous?\n 1: fromage (15$)\n 2 : poivron (16$) \n 3 : végétarienne : (14$) \n Entré le chiffre correspondant"));

//À noter que nous avons demandé des nombres à l'utilisateur à toutes les questions pour la fluidité et évitre des erreurs de frappe de celui-ci

}while(choix < 1 || choix > 3 || isNaN (choix) );

    pizza = {
    1 : 15, //Fromage
    2 : 16, //Poivron
    3 : 14, //Végétarienne
};

total = pizza [choix] * nbPizza;

if (total > 31){
    total -= rabais = total * .20;
}

do{
    quartier = Number (prompt ("Dans quelle quartier êtes-vous? \n1 : St-Jean (Gratuit) \n2 : Limoilou (5$) \n3: Moncalm (5$) \nEntré le chiffre correspondant") );

}while(quartier < 1 || quartier > 3 || isNaN (quartier) );



if(quartier === 2 || quartier === 3){

do{

fete = prompt ("Est-ce votre fête? (livraison Gratuite) \nRéponder par o/n");

}while (fete !== "o" && fete !== "n");

        if (fete === "n"){  //ici nous fesons sauter la question de la fete si habite quartier St-Jean, car livraison est d'office gratuite
        total += prixLivraison = 5;             
    }
}

document.getElementById("pizza").innerHTML =("Nombre de pizza : " + nbPizza+"<br>" +
                                             "Prix des pizzas : " + (total - prixLivraison).toFixed(2) + "$" + "(réduction de " + rabais.toFixed(2) + "$)" + "<br>"+             
                                             "Prix livraison : "+ prixLivraison.toFixed(2) + "$" + "<br>"+
                                             "Prix total : " + total.toFixed(2) + "$<br>"+
                                             "Prix total avec taxe : " + (total + total * .14975).toFixed(2)  + "$" );


