import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchCorona=()=>{

    return this.http.get("https://api.rootnet.in/covid19-in/hospitals/beds")
    }
}
