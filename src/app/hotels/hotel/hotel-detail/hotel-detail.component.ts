import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HotelListService} from "../../shared/services/hotel-list.service";
import {IHotel} from "../../shared/models/hotel";
import {NouveauNesModel, VenteModel} from "./vente.model";



@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  public hotel: IHotel = <IHotel>{};

   nom: string ;
   quantite: number;
   prix: number;
   vente: VenteModel []=[];

   dateDeNaisssance: string;
   poids: number;
   nombreDeBebe: number;
  bebe: NouveauNesModel []=[];



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

  Market():void{
    if(this.nom && this.nom !=''){

      let vente: VenteModel = new VenteModel()

      vente.nom = this.nom;
      vente.prix = this.prix;
      vente.quantite = this.quantite;

      this.vente.push(vente)
      console.log(vente);
    }

  }

  Lingettes():any {

    if (this.dateDeNaisssance && this.dateDeNaisssance != '') {

      let bebe: NouveauNesModel = new NouveauNesModel();

      bebe.nombreDeBebe = this.nombreDeBebe;
      bebe.poids = this.poids;
      bebe.dateDeNaisssance=this.dateDeNaisssance;

      this.bebe.push(bebe)
      console.log(bebe);



    }

  }

  NouveauNes() {

  }
}
/*
// les variables
let x = 4;
let y = 'toto';
let z = false;
console.log(x);
console.log(y);
console.log(z);
*/
