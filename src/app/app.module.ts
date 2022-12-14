import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallComponent } from './viewall/viewall.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[

  {path:"",component:AddComponent},
  {path:"view",component:ViewallComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    NavbarComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
