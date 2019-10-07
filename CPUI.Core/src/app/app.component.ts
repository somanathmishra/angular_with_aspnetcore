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

    this._service.post("http://portal1.airloc8.com:82/api/a8Captiveportal/V2/AutoLogin",
      {
        "SSIDName": "VIP WIFI",
        "ServerIP": "37.191.118.234",
        "Device": {
          "MacAddress": "7c:c5:37:c0:d3:d3",
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
