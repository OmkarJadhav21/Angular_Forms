import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  rainTxt: string;
  
    constructor(
      private http: Http
    ) { }
  
    ngOnInit() {
    }
  
    onWeather(city: string) {
      this.http.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7406c21bb1cb9f59d936a59c4e890279`
      ).subscribe(
        res => {
          console.log(res.json());
          this.rainTxt = res.json()['weather']['0']['description'];
       // this.rainTxt = res.json().weather[0].description;
          this.rainTxt += 'Latitude : ' + res.json()['coord']['lat'];
          this.rainTxt += `Longitude : ${res.json()['coord']['lat']}`;
      
        });
    }
}
