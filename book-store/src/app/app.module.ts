import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';

import { BooksModule } from './modules/books/books.module';
import { CartModule } from './modules/cart/cart.module';
import { PagesModule } from './modules/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    CartModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
