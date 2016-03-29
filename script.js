/////////////////////////////////////////////// ACTIVITE 3 /////////////////////////////////////////////////////////////////


function aireTriangle(base,hauteur) {
	alert((base * hauteur) / 2);	
}

function tva() {
	var prixUnit = prompt("Prix unitaire?"),
	tva = 1 + (prompt("Taux TVA?") / 100),
	quant = prompt("Quantitié?");
	alert((prixUnit * tva) * quant);
}

function permut() {
	var var1 = prompt("Var 1 ?"), var2 = prompt("Var 2 ?"), var3 = var1;
	var1 = var2;
	var2 = var3;
	alert("var1 is now : " + var1 + " and var2 is now  : " + var2);
}

function moyenne() {
	var note1 = parseInt(prompt("Note 1 ( coeff 1)")),
	      note2 = parseInt(prompt("Note 2 (coeff 2)")),
	      note3 = parseInt(prompt("Note 3 (coeff 3)"));
	      alert(((note1 + (note2*2) + (note3*3)) / 6)*5 + "%");
}

function somme() {
	var var1 = parseInt(prompt("Nombre entier de 3 chiffes?"));
	alert(((var1 - (var1%100))/100) + (((var1%100) - (var1%10))/10) + (var1%10));
}

function sommeTab() {
	var var1 = prompt("Nombre entier de 3 chiffes?").split("");
	alert(parseInt(var1[0])+parseInt(var1[1])+parseInt(var1[2]));
}


/////////////////////////////////////////////// ACTIVITE 4 /////////////////////////////////////////////////////////////////

function big2() {
	var a = parseInt(prompt("First input ?")), b = parseInt(prompt("Second input ?"));
	alert((a>b) ? a : b);
}

function big3() {
	var a = parseInt(prompt("First input ?")), b = parseInt(prompt("Second input ?")), c = parseInt(prompt("Third input ?"));
	var array = [a, b ,c];
	array = array.sort();
	alert(array[0]);
}

function positif() {
	var a = parseInt(prompt("Input ?"));
	if (a > 0) {
		alert("Input positif");
	} else if (a < 0) {
		alert ("Input négatif");
	} else {
		alert("Input is zero");
	}
}


function interval() {
	var a = parseInt(prompt("Your number : "));	
	var b = parseInt(prompt("Is between : "));
	var c = parseInt(prompt("and : "));
 	if ((a > b  && a <  c) || (a > c && a < b)) {
 		alert("Number in range");
 	} else {
 		alert("Number out of range");
 	}
}


function mois() {
	 var input = parseInt(prompt("Mois  en chiffre ?"));
	if (input == 1 || input == 3 || input == 5 || input == 7 || input == 8 || input == 10 ||input == 12) {
		alert("31 jours dans le mois");
	} else if (input == 2) {
		alert("28 jours dans le mois");
	} else {
		alert("30 jours dans le mois");
	}
}

function biss(input) {
	if (((input % 4 == 0) && (input % 100 != 0)) || ((input % 4 == 0) && (input % 100 == 0) && (input % 400 == 0))) {
		return true;
	} else {
		return false;
	}
}

function mois2(input,annee) {
	if (input == 1 || input == 3 || input == 5 || input == 7 || input == 8 || input == 10 ||input == 12) {
		return 31;
	} else if (input == 2 && biss(annee)) {
		return 29;
	} else if (input == 2 && !biss(annee)) {
		return 28;
	} else {
		return 30;
	}
}




function date() {
	var jour = parseInt(prompt("Jour ?"));
	var mois = parseInt(prompt("Mois ?"));
	var annee = parseInt(prompt("Année"));
	if (jour <= mois2(mois,annee) && mois <= 12 && mois >= 0 && annee >=0) {
		alert("Valide!");
	} else {
		alert("Pas valide");
	} 
}

function parking()  {
	var numRue = parseInt(prompt("Numéro de rue ?"));
	var date = parseInt(prompt("Jour du mois ?"));
	if (((date < 16) && (numRue % 2 != 0)) || ((date > 15) && (numRue % 2 == 0))) {
		alert("Vous êtes bien");
	} else {
		alert("Pas bien !");
	}
}


/////////////////////////////////////////////// ACTIVITE 5 /////////////////////////////////////////////////////////////////

function nPremiers() {
	
	var one = 1;
	var array = [];
	var array2 = [];
	var array3 = [];
	var number = parseInt(prompt("Entrer un entier positif : "));
	while (number < 0) {
		number = parseInt(prompt("Entrer un entier POSITIF : "));
	}

	while (one <= number) {
		array.push(one)
		one++;
	}


/////  1

	alert(number + " entiers positifs : " + array);

/////  2

	array.sort(function(a, b){return b-a});
	alert(number + " entiers positifs décroissants: " + array);

/////  3

	array.sort(function(a,b){return a - b});
	
	var two = 0;
	while ( two < number ) {
		array2.push(Math.pow(array[two], 2));
		two++;
	}
	
	alert("Carré des entiers : " + array2);

/////  4

	var imp = 0;
	var four = 0;
	while (four < number) {
		array3.push(1 + imp);
		imp = imp + 2;
		four++;
	}
	
	alert(number +  " entiers positifs impairs " + array3);

/////  5

	var three = 0;
	while ( three < number ) { 
	if (array[three] % 2 == 0) {
			array.splice(three, 1);
		}	
	three++;
	}

	alert("Entiers impairs : " + array);


}


function maxNumber() {

	var x = parseInt(prompt("Note?"));
	var array = [];
	array.push(x);

	while (x >= 0 && x <= 20) {
		x = parseInt(prompt("Note??"));
		if (x >= 0 && x<=20) {
		array.push(x);
		}
	}

	array.sort(function(a,b){return a - b});
	alert(array[array.length-1]);
	

}


function multiple3() {
	var count = 0;
	var array = [];
	var input;
	while (input != 0) {
		input = parseInt(prompt("Nombre?"));
		if (input !=0) {
			array.push(input);
		}
		if (input%3==0 && input != 0){
			alert("Multilpe de 3 !");
			count++;
		}
	}
	alert(count + " multiples de 3 insérés");
}


function suites() {
	var nPremiers = parseInt(prompt("Combiens de chiffres à générer ?"));
	var i = 0, a = 1, b = 1, c = 2, z = 0;
	var s = 0;
	var x = 1;
	var d = 1;
	var croissant = [];
	var boiteuse = [];
	var fibonacci = [];


	while ( i < nPremiers ) {
		
		
// Pas Croissant
		croissant.push(i + a);
		a = i + a;

		
// Boiteuse
		boiteuse.push(b);
		boiteuse.push(c);
		b = b + 3;
		c = b + 1;

// Fibonacci
		// console.log("d : " + d);
		// console.log("s : " + s);
		// console.log("x : "+ x);
		// console.log("------------------");		
		fibonacci.push(d);
		d = s + x;
		s = x;
		x = d;


		i++;

	}

	
	alert("Suite Pas Croissant " + croissant);
	alert("Suite Boiteuse " + boiteuse);
	alert("Suite Fibonacci " + fibonacci);
}





function fourchette() {

	var userInput = parseInt(prompt("Enter a number"));
	var rng = Math.floor((Math.random() * 100) + 1); 
	var tries = 8;

	while (tries > 0 && userInput > rng) {
		alert("Your number is too high!  " + tries + " tries left");
		userInput = parseInt(prompt("Enter a number"));
		tries--;
	}
	
	while (tries > 0 && userInput < rng) {
		alert("Your number is too low!  "  + tries + " tries left");
		userInput = parseInt(prompt("Enter a number"));
		tries--;
	}
	
	while (tries >= 0 && userInput == rng) {
		alert("Bravo!")
		var again = prompt("Try again ? y/n")
		if (again == "y") {
		tries = 8;
		fourchette();
		} else {
			return false;
		}
	}
	
	while (tries == 0) {
	alert("You have ran out of tries");
	
	var again = prompt("Try again ? y/n")
		if (again == "y") {
		tries = 8;
		fourchette();
		} else {
			return false;
		}

	}

}



/////////////////////////////////////////////// ACTIVITE 6 /////////////////////////////////////////////////////////////////




function sommeTab() {
	
	var input = true;
	var array = [];

	while (input) {
		input = parseInt(prompt("Nombre entier ? (laissez vide pour stop)"));
		array.push(input);
	}

	array.pop();

	for (var i = 0, somme = 0; i < array.length; i++) {
		somme +=  array[i];
	}

	alert("Somme du tableau : " +  somme);
}



function minMax() {

	var input = true;
	var array = [];

	while (input) {
		input = parseInt(prompt("Nombre entier ? (laissez vide pour stop)"));
		array.push(input);
	}

	array.pop();

	for (var i = 0, min = array[i], max = array[i]; i < array.length; i++) {
		
		if  (array[i] >= max){
			max = array[i];
		} 
		
		if (array[i] <= min) {
			min = array[i];
		}
		
	}
	alert("Min = " + min + " Max = " + max);
}


function totalArray() {
	var input = true;
	var array = [];
	var total = 0;

	while (input) {
		input = prompt("Input ? Laissez vide pour stop");
		array.push(input);
	}

	array.pop();

	for (var id in array) {
		total++;
	}	
	alert(total + " items in this array " + "( " + array + " )");
}


function grandEcart() {

	var input = true;
	var array = [];

	while (input) {
		input = parseInt(prompt("Nombre entier ? (laissez vide pour stop)"));
		array.push(input);
	}

	array.pop();

	for (var i = 0, min = array[i], max = array[i]; i < array.length; i++) {
		
		if  (array[i] >= max){
			max = array[i];
		} 
		
		if (array[i] <= min) {
			min = array[i];
		}
		
	}

	alert("Le plus grand écart est : " + max + "-" + min + "=" + (max-min));
}


function ordered() {

	var input = true;
	var order = true;
	var array = [];

	while (input) {
		input = parseInt(prompt("Nombre entier ? (laissez vide pour stop)"));
		array.push(input);
	}

	array.pop();

	for(var i = 1; i < array.length;i++) {

		if (array[i] > array[i-1]) {
			order = true;	
		} else {
			alert("Order is  wrong.")
			return false;
		}
	}
	
	alert("Ordered is : " + order);
}


function renverse() {

	var input = true;
	var x, y;
	var array = [];

	while (input) {
		input = prompt("Input ? Laissez vide pour stop.");
		array.push(input);
	}

	array.pop();

	

	for (var i = array.length, z = 0; i > Math.floor(array.length/2); i--, z++) {
		alert(Math.floor(array.length/2));
		x = array.splice(i-1,1);

		y = array.splice(z,1,x);

		x = array.splice(i-1,0,y);

	}

	alert(array);
}





























