import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './AdminConfig/login-page/login-page.component';
import { RegistrationPageComponent } from './AdminConfig/registration-page/registration-page.component';
import { DeezerRegistrationComponent } from './BeSpokeConfig/deezer-registration/deezer-registration.component';
import { ThomsonRegistrationComponent } from './BeSpokeConfig/thomson-registration/thomson-registration.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    DeezerRegistrationComponent,
    ThomsonRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
