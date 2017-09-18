import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
dt:String;
money:number= 45;
mystr:String
  constructor() { }

  ngOnInit() {
    this.dt = new Date().toString();   
     this.mystr="Omkar"
  }

}
