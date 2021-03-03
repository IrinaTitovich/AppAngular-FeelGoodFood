import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserPost } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  api=[
    'faab79fee7b44f0d94a5f592d35b5378',
    'c52d9ad4b23e41fb94855f50023d0907',
    '60815e9bf5834ea5af934c93af3836c7',
    '50f605507c174c8aa4e2bcd7f7172dcb',
    'a3c00363bf63449db8ecd2115fdcbf15'
  ]


  constructor( public http:HttpClient) {
  }

  getRecipe(resp:string):Observable<any>{
    return this.http.get<any>(resp, {params:new HttpParams().set('apiKey','c52d9ad4b23e41fb94855f50023d0907')})
}
connectUser(url:string,req:UserPost):Observable<any>{
  return this.http.post<any>(url,req, {params:new HttpParams().set('apiKey','c52d9ad4b23e41fb94855f50023d0907')})
}
generateShoppingList(url:string):Observable<any>{
  return this.http.post<any>(url, {params:new HttpParams().set('apiKey','a3c00363bf63449db8ecd2115fdcbf15')})
}
}
