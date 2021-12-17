import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ElectorModel} from "./model/elector.model";

@Component({
  selector: 'app-elector',
  templateUrl: './elector.component.html',
  styleUrls: ['./elector.component.scss']
})
export class ElectorComponent implements OnInit {
  formGroup: FormGroup;
  electeurs: ElectorModel []=[];
  preelecteurs: ElectorModel []=[];
  postelecteurs: ElectorModel []=[];



  constructor(
   private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required]
    })
  }

  getElecteurs(){
    const controls = this.formGroup.controls;
    let element: ElectorModel = new ElectorModel();
    element.name = controls['name'].value;
    element.firstname = controls['firstname'].value;
    element.age = controls['age'].value;
    element.sex = controls['sex'].value;


    if(element.age >=18){
      this.electeurs.push(element);
      console.log(this.electeurs);
    }
    else if(element.age==17){
      this.preelecteurs.push(element);
      console.log(this.preelecteurs);
    }
    else{
      this.postelecteurs.push(element);
      console.log(this.postelecteurs);
    }
  }

}
