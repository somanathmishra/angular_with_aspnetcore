import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { autologinResponse } from './shared/responseMap';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  //Call autologin api
  autoLoginPost(): Observable<HttpResponse<autologinResponse>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });  
    return this.http.post<autologinResponse>("http://portal1.airloc8.com:82/api/a8Captiveportal/V2/AutoLogin",
      {
        "SSIDName": "VIP WIFI",
        "ServerIP": "37.191.118.234",
        "Device": {
          "MacAddress": "7c:c5:37:c0:d3:d3",
        }
      },
       {
        headers: httpHeaders,
        observe: 'response'
      }
    );
  }


  

}
