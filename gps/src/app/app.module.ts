import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent, 
  LayoutComponent, 
  NavbarComponent 
} from './components/index';

import { 
  VehiclesModule, 
  DevicesModule,
  PagesModule 
} from './modules/index';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    VehiclesModule,
    DevicesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
