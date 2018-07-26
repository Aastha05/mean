import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BookHomeComponent } from './components/book-home/book-home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

import { BookapiService } from './services/bookapi/bookapi.service';
import { BookImageUrlPipe } from './pipes/book-image-url/book-image-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    BookHomeComponent,
    BookListComponent,
    BookDetailComponent,
    BookImageUrlPipe
  ],
  providers: [
    BookapiService
  ]
})
export class BooksModule { }
