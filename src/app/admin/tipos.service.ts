import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TiposService {
  API_URL = 'http://localhost:3000';
  
    constructor(private http: HttpClient) { }
  
    getTipos(): Observable<any[]> {
      return this.http.get<any[]> (this.API_URL +'/tipos');
  
    }
  
    getTipo(id:number): Observable<any> {
      return this.http.get<any> (this.API_URL +'/tipos/'+id);
  
    }

}