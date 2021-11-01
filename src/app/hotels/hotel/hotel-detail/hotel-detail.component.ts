import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HotelListService} from "../../shared/services/hotel-list.service";
import {IHotel} from "../../shared/models/hotel";

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  public hotel: IHotel = <IHotel>{};
  constructor(
    private route: ActivatedRoute,
    private hotelService : HotelListService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotels().subscribe((hotels: IHotel[])=>{
      this.hotel = hotels.find(hotel =>hotel.hotelId ==id)
      console.log('hotel:', this.hotel);
    })
  }

  public backToList():void {
    this.router.navigate(['/hotels'])

  }
}
// les variables
let x = 4;
let y = 'toto';
let z = false;
console.log(x);
console.log(y);
console.log(z);

//les tableaux
let tab1 = [1,2,3];
console.log(tab1);
let tab2 = ['toto', 'titi'];
console.log(tab2);
let tab3 = [3,'tot']; // type (number |string)
console.log(tab3);

let a ; //type = any
a = 4;
console.log(a)
a = 'tata';
console.log(a)

let b : number;
b = 20;
console.log(b);
let b1 : number = undefined;
b1 = 10;
console.log(b1);
let b2 : number = null;
b2 = 25;
console.log(b2);

let c : number= 4;
console.log(c);
c = 6;
console.log(c);

let d : any = 30;
console.log(d);
d = 'tata';
console.log(d);

let e = undefined;
e = 1;
console.log(e);
let f : undefined = undefined; // on ne peut pas le modifier
let g : null = null; // on ne peut pas l'affecter une valeur

let h = [1,2];
console.log(h);
h[2] = 3;
console.log(h);
h[1] = 3;
console.log(h);

let i : number[] = [];
i[0] = 3;
console.log(i);

let j : (number|string) [] = [];
j[0] = 'toto';
j[1] = 3;

let k : [number, string] = null;
k = [3,'toto']


//énumération
enum Couleur {Rouge, Vert, Bleu }
const ma_couleur = Couleur.Rouge + ' '+ Couleur.Bleu;
console.log(ma_couleur);
enum Taille {Petite = 3, Moyenne = 10, Grande};
const ma_taille : Taille = Taille.Petite;
console.log(ma_taille) //3



