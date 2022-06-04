import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  constructor(private http: HttpClient) { }

  search(item: string) {
    return this.http.get('https://api.mercadolibre.com/sites/MCO/search?&q='+item, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
