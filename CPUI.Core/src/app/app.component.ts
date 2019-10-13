import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IndexPageLoadService } from './Services/index-page-load.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  postvalue: string = null;
  cookieValue: string = null;

  constructor(private _service: HttpClientModule,
    private router: Router, private _appservice: AppService, private _IndexPageLoadService: IndexPageLoadService) {

  }

  ngOnInit() {
    this._appservice.autoLoginPost().subscribe(res => {
      let response = res.body;
      if (response.IsDeviceForAutoLogin && response.IsNetWorkForAutoLogin && !response.IsHomePage) {
      //  GiveTheInternetAccessOrCheckTerm(response);
      }
      else if (response.IsHomePage) {
       // RedirectWelcomePage(response.SubControlType, response.BeSpokePageName);
      }
      else {
       
        this._IndexPageLoadService.CheckRedirectPageAsPerConfiguration(response);
      }
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          //A client-side or network error occurred.				 
          console.log('An error occurred:', err.error.message);
        } else {
          //Backend returns unsuccessful response codes such as 404, 500 etc.				 
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
        }
      }
    );
   

  }

}
