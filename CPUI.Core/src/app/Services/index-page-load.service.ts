import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndexPageLoadService {

  url: string = null;
  constructor(private router: Router) { }


  //Call CheckRedirectPageAsPerConfiguration

  CheckRedirectPageAsPerConfiguration(response) {
    switch (response.ControlType) {
      case 'Login':
        if (response.IsDeviceForAutoLogin || response.EnforceTermAndCond) {
          this.RedirectToPage(response.SubControlType, response.BeSpokePageName, "loginpage");
        }
        else {
          this.RedirectToPage(response.SubControlType, response.BeSpokePageName, "registrationpage");
        }
        break;
      case 'Usage':

        this.RedirectToPage(response.SubControlType, response.BeSpokePageName, "BuyPackage");
        break;
      case 'OpenAccess':
       // CallControllerMethod(response, response.ControlType);
        break;
      default:
        alert("No control Type able to found");
        break;
    }
  }




  RedirectToPage(subControlType, bespokepage, urlPathRedirect) {

    if (subControlType == "BeSpoke Configuration")
    {
      this.url = "/" + bespokepage + '/' + urlPathRedirect;
      console.log("URL:" + this.url);

      //to test deezerregistrationpage url
      this.url = 'deezerregistrationpage';

    }
    else {
      this.url = urlPathRedirect;
    }
    this.router.navigate([this.url]);

  }
}
