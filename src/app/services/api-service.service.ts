import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catUrl, productUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  constructor(private http: HttpClient) { }

  getCategories(cred:any)
  {
    return this.http.post(catUrl, cred );
  }

  getProducts(cred:any)
  {
    return this.http.post(productUrl, cred );
  }


}
 