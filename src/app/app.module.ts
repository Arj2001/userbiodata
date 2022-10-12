import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BiodataComponent } from './biodata/biodata.component';
import { RouterModule, Routes } from '@angular/router';

const addRoute:Routes=[
  {
    path:"",component:BiodataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BiodataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
