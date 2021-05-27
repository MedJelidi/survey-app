import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response} from '../models/response.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private httpClient: HttpClient) { }

  postResponse(response: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/response', response,
      {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
}
