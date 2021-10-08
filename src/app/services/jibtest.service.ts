import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JibtestService {

  constructor(private httpClient:HttpClient) {
   }

  getGreetings():Observable<any>{
    return this.httpClient.get("https://jibtest-lhefrhbyia-uc.a.run.app/api/home");
  }
}
