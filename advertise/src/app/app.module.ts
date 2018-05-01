import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdvertiseService } from './services/advertise.service';

@NgModule({
  declarations: [
    AppComponent,
    AspectRatioComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    AdvertiseService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
