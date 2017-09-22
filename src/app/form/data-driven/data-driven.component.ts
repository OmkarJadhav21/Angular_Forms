import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

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
    user:['', Validators.required],
    email:['', Validators.compose([
    
      Validators.required,       
      Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
     //this is emails regular expression pattern
  ])],
    pass:['', Validators.compose([
      Validators.required,
     this.length10
    ])]
})
  }
  dataSubmit(){
    console.log(this.myform);    
  }
  length10(control: AbstractControl): ValidationErrors | null {
    return control.value.length >= 8   ? null : { myErr: 'Check the length' };
  }

}
