import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectorComponent } from './elector.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component:ElectorComponent}
];

@NgModule({
  declarations: [
    ElectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class ElectorModule { }
