
// FONCTION TRI DOSSARD //


function tri_dossard(type){

var tableau =new Array;
tableau= tableau.concat(listecomp);
var resultat= new Array;
var minimum;
var indice;
var ligneMinimum;

if (type==0 || type==2){
while(tableau.length !=0){
minimum =tableau[0][type];
for(var i =0; i<tableau.length;i++){
	if(tableau[i][type]<= minimum){
		minimum=tableau[i][type];
		ligneMinimum= tableau[i];
		indice = i;
	}
}

resultat.push(ligneMinimum);
tableau.splice(indice,1);
}
afficherUnTableau(resultat);
}


// FONCTION TRI NOM //

function tri_nom(type){
var tableau = new Array;
tableau=tableau.concat(listecomp);
var resultat=new Array;
//recherche dans tableau
//parcourir tableau
//boucle
//indexOf(trouver tableau)
//ressortir résultat

for (i=0;i<=tableau.length-1;i++){
if()

	}
}

