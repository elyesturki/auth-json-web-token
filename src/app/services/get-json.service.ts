import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private http: HttpClient) { }

  getJson(email, password) {
    console.log("email pwd - service : ", email, password)
  }
}
