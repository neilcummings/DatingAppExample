import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app is working!';
  values: any;

  constructor(private http: Http){
    this.getValues().subscribe(values => {
      this.values = values;
    });
  }

  getValues() {
    return this.http.get("http://localhost:5000/api/values").map(response => response.json());
  }
}
