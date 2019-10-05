import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
//import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  
  postvalue: string = null;
  cookieValue: string =null;

  constructor(private _service: Http) {

  }

  ngOnInit() {
     
      this._service.post("http://18.130.87.97:82/api/a8Captiveportal/V2/AutoLogin",
      {
        "SSIDName": "Test Linux CP",
        "ServerIP": "10.0.1.1",
        "Device":
          {
             "MacAddress": "12:65:7c:lk:09",
          }
      })
        .subscribe(data => {

          
         let postvalue = 'register';
        },
        error => {
          console.log("In Error");
          console.log("Error", error);
         let postvalue = 'login';

        }

      );


  }

}
