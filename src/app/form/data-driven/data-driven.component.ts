import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  myform:FormGroup;

  ngOnInit() {
  this.myform=this.fb.group({
    user:[''],
    email:[''],
    pass:['']
})
  }
  dataSubmit(){
    console.log(this.myform);    
  }
}
