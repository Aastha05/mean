import { Component, OnInit } from '@angular/core';

import { BookapiService } from '../../services/bookapi/bookapi.service';

import { Book } from '../../entity/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(
    private bookapi: BookapiService
  ) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this
      .bookapi
      .getAllBooks()
      .subscribe((response) => {
        this.books = response;
      }, (error) => {
        alert('error on backend');
      }, () => {

      });
  }

}
