import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RuraleService {

  constructor(private http:HttpClient) { }
  visualAccesso(){
  }
}
