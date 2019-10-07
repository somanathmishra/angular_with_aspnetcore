import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
//import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  postvalue: string = null;
  cookieValue: string = null;

  constructor(private _service: Http, private router: Router) {

  }

  ngOnInit() {

    this._service.post("http://18.130.87.97:82/api/a8Captiveportal/V2/AutoLogin",
      {
        "SSIDName": "PAID-WIFI",
        "ServerIP": "192.168.1.4",
        "Device":
        {
          "MacAddress": "12:65:7c:lk:09",
        }
      })
      .subscribe(data => {
        console.log("Success");
        this.router.navigate(['/registration']);
      },
        error => {
          console.log("In Error");
          console.log("Error", error);
          let postvalue = 'login';

        }

      );


  }

}
