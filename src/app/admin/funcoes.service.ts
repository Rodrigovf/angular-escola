import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class FuncoesService {
  API_URL = 'http://localhost:3000';
  
    constructor(private http: HttpClient) { }
  
    getFuncoes(): Observable<any[]> {
      return this.http.get<any[]> (this.API_URL +'/funcoes');
  
    }
  
    getFuncao(id:number): Observable<any> {
      return this.http.get<any> (this.API_URL +'/funcoes/'+id);
  
    }

}
