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
private Mobiles=[
  'Nokia',
  'Samsung',
  'HTC',
  'iPhone',
  'Dell',
  'Hp',
  'Lenovo',
  'Sony'
];

private prom:Promise<String>=new Promise<String>(
  (res,rej)=>setTimeout(()=>res(`Yes,,,Got it!!!`),2000)
)

  constructor() { }

  ngOnInit() {
    this.dt = new Date().toString();   
     this.mystr="Omkar"
  }
  AddNewMob(newMob){
this.Mobiles.push(newMob)
  } 
}
