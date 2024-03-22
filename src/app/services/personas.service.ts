import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  constructor(private httpClient: HttpClient) { }

  API_URL:string = 'http://localhost:8081/ejemplo01/personas';

  getPersonas(): Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }



}
