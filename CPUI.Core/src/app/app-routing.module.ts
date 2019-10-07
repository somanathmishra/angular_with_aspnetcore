import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './AdminConfig/login-page/login-page.component';
import { RegistrationPageComponent } from './AdminConfig/registration-page/registration-page.component';
import { DeezerRegistrationComponent } from './BeSpokeConfig/deezer-registration/deezer-registration.component';
import { ThomsonRegistrationComponent } from './BeSpokeConfig/thomson-registration/thomson-registration.component';
//import { AuthGuard } from './_guards';


const routes: Routes = [
//  { path: '', component:_guards,  canActivate: [AuthGuard] },
  { path: 'loginpage', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'BeSpokeConfig/deezer-registration/deezer-registration.component', component: DeezerRegistrationComponent },
  { path: 'BeSpokeConfig/thomson-registration/thomson-registration.component', component: ThomsonRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


