import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person, PersonClass} from '../models/Person';
import {Http} from '@angular/http';

@Injectable()
export class SwapiService {

  private swapiUrl = 'https://swapi.co/api/';

  constructor(private _httpClient: HttpClient,
              private _http: Http) {}

  getLuke() {
    return this._httpClient.get<Person>(`${this.swapiUrl}people/1`);
  }
  // DEPRECATED
  // getLukeOldSql() {
  //   return this._http.get(`${this.swapiUrl}people/1`).
  // }

}
