import {Component, OnInit} from '@angular/core';
import {VenteModel} from "./models/vente.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nomProduit: string;
  prix: number;
  quantite: number;
  vente: VenteModel[] = [];



  constructor(

  ) {
  }

  ngOnInit(): void {

  }

  market() {
    if (this.nomProduit && this.nomProduit != '') { //si nomProduit existe et que ...

      //creation objet
      let elementVente: VenteModel = new VenteModel();
      elementVente.nomProduit = this.nomProduit;
      elementVente.prix = this.prix;
      elementVente.quantite = this.quantite;

      //inserer element dans le tableau
      this.vente.push(elementVente);
      console.log(this.vente);
    }
  }




}


// hors classe
let l = function (x, y) {
  return x + y;
}
console.log(l(4, 8) + ' ' + l('toto ', 'titi'));

let m = function (x: number, y: number) {
  return x + y;
}
console.log(m(10, 20));

//Etude

interface Point {
  x: number;
  y: number;
}

let display = (p: Point) => {
  console.log(p.x, p.y);
}
display({x: 3, y: 5});

// les tableaux
let friends: (number | string)[] = [];
friends = [27, 25, "DEDO", 24,];
// tuples
let identity: [string, number] = ["André", 27];

//les objets
let userData: { name: string; age: number; isMajeur: boolean } = {
  name: "Alexis",
  age: 27,
  isMajeur: true
};
console.log(userData);

//les types

type Identity = {
  name: string;
  age: number;
  isMajeur: boolean;
  hobbies: string[];
}
//on peut aussi directement declarer les types dans la constante
const identite: Identity = {
  name: "Alexis",
  age: 27,
  isMajeur: true,
  hobbies: ["basket", "libre", "Ecrire"]
};
console.log(identite);

const identite2: {
  name: string;
  age: number;
  isMajeur: boolean;
  hobbies: string[];
} = {
  name: "Jean",
  age: 29,
  isMajeur: true,
  hobbies: ["football", "libre", "Ecrire"]
};

interface IHello {
  (name: string, age?: number): void
}

const sayHello: IHello = (name, age) => {
  console.log(`Bonjour à toi, ${name}, tu as ${age} ans.`);
};
sayHello("Alexis", 27);

let value = 30;
if (typeof value == "number") console.log("Value est un nombre!");

// function foo(x: string | number | boolean): boolean{
//   if (typeof x === "string"){
//     return true;
//   }else if(typeof x === "number"){
//     return false;
//   }
//   return fail("x n'est ni un string ni un number");
// }
// foo(false);

// function fail(message: string): never {
//   throw new Error (message);
// }

//Fonction flechée

let direAuRevoir = () => 'Au revoir';
console.log(direAuRevoir());

let somme = (x, y) => x + y;
console.log(somme(5, 8));

let bonsoir = (firstname) => 'Bienvenu ' + firstname;
console.log(bonsoir('Mathieu'));


function Bye() {
  console.log('Au REvoir');
}

Bye();

function direBonjour(prenom) {
  console.log('Bonjour ' + prenom);
}

direBonjour('Nicolas');

const prices = [4, 8, 10, 15, 20, 30];

let plusGrandQue10 = prices.filter(p => p > 10);
console.log(plusGrandQue10);

// le mot this n'est pas disponible dans une fonction flechée/////////
const utilisateur = {
  prenon: 'Nicolas',
  age: 50,

  presentation: function () {
    return `Bonjour, je m'appelle ${this.prenom} et j'ai ${this.age} ans.`;
  }
}
console.log(utilisateur.presentation());

class Car {
  constructor(public position: number, protected speed: number) {
  }

  move() {
    this.position += this.speed;
  }
}

class SelfDrivingCar extends Car {
  constructor(startAutoPilot: boolean) {
    super(0, 42);
    if (startAutoPilot) {
      this.move();
    }
  }
}

let car = new SelfDrivingCar(true);
console.log(car.position); // access the public property position

//je suis là

function getNbre(nbre: number) {
  if (nbre > 0) {
    return 'votre nombre est positif';
  } else {
    return 'votre nombre est négatif'
  }
}

console.log(getNbre(-10));

function getValue(un: number, deux: number) {
  if (un > 0 && deux > 0 || un < 0 && deux < 0) {
    return 'leur produit est positif'
  } else {
    return 'leur produit est négatif'
  }
}

console.log(getValue(5, 4));

//la raparaison se fait selon la règle a<b dans la pro
function getOrdre(a: string, b: string, c: string) {
  if (a < b && b < c) {
    return 'vos noms sont en ordre'
  } else {
    return 'vos noms ne sont pas en ordre'
  }
}

console.log(getOrdre('bonne', 'jean', 'paul'));

