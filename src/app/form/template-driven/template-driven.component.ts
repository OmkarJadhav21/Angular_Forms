import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
frmData={
  usNm:'',
  eml:'',
  pass:''
}
  constructor() { }

  ngOnInit() {
  }
  onSubmit(myFrm?:NgForm){
// console.log(myFrm.form.value);       //first way to read data of form at console
console.log(this.frmData);           //Second way to read data of form at console
  }
}
