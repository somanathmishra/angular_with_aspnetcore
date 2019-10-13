import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './AdminConfig/login-page/login-page.component';
import { RegistrationPageComponent } from './AdminConfig/registration-page/registration-page.component';
import { ThomsonRegistrationComponent } from './BeSpokeConfig/thomson-registration/thomson-registration.component';
import { AppRoutingModule } from './app-routing.module';
import { DeezerRegistrationPageComponent } from './BeSpokeConfig/deezer-registration-page/deezer-registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ThomsonRegistrationComponent,
    DeezerRegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
