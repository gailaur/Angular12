import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {HotelModule} from "./hotels/hotel/hotel.module";


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'hotels', loadChildren: () => import('./hotels/hotel/hotel.module').then(m => m.HotelModule)},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    HotelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
