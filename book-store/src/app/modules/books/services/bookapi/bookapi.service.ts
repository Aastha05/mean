import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';

import { Book } from '../../entity/book';

@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * @return books from server as observable
   * 
   * `
   * {
   *  "_id":"objectid",
   *  "name":"book name"
   * }
   * `
   */
  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(environment.apiBaseUrl + '/books');
  }
}
