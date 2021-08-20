import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(method: string) {
    return this.http.get(environment.backBase + method);
  }

  post(method: string, data: any = {}) {
    return this.http.post(environment.backBase + method, data, {
      headers: {
        contentType: 'application/json'
      }
    })
  }
}
