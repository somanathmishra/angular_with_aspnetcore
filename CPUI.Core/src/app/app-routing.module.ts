import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './AdminConfig/login-page/login-page.component';
import { RegistrationPageComponent } from './AdminConfig/registration-page/registration-page.component';
import { DeezerRegistrationPageComponent } from './BeSpokeConfig/deezer-registration-page/deezer-registration-page.component';
import { ThomsonRegistrationComponent } from './BeSpokeConfig/thomson-registration/thomson-registration.component';
//import { AuthGuard } from './_guards';


const routes: Routes = [
//  { path: '', component:_guards,  canActivate: [AuthGuard] },
  { path: 'loginpage', component: LoginPageComponent },
  { path: 'registrationpage', component: RegistrationPageComponent },
  { path: 'deezerregistrationpage', component: DeezerRegistrationPageComponent },
  { path: 'thomsonregistrationpage', component: ThomsonRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


