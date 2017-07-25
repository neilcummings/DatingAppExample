import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ProfileService {

  constructor(private http:Http) { }

  getValues() {
    return this.http.get("http://localhost:5000/api/values", this.jwt()).map(response => response.json());
  }

  private jwt() {
    // create auth header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token) {
      let headers = new Headers({'Authorization':'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }

}
