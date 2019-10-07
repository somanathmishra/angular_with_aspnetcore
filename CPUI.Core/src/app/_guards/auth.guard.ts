//import { Injectable } from '@angular/core';
//import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { HttpModule, Http } from '@angular/http';

//@Injectable()
//export class AuthGuard implements CanActivate {

//  constructor(private router: Router, private _service: Http) { }

//  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//   //call AutoLogin Api
//    this._service.post("http://18.130.87.97:82/api/a8Captiveportal/V2/AutoLogin",
//      {
//        "SSIDName": "PAID-WIFI",
//        "ServerIP": "192.168.1.4",
//        "Device":
//        {
//          "MacAddress": "12:65:7c:lk:09",
//        }
//      })
//      .subscribe(data => {
//        console.log("Success");
//        this.router.navigate(['/AdminConfig/registration-page/registration-page.component'], { queryParams: { returnUrl: state.url } });
//      },
//        error => {
//          console.log("In Error");
//          console.log("Error", error);
//          let postvalue = 'login';

//        }

//      );


//    // not logged in so redirect to login page with the return url
//    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//    return false;
//  }
//}
