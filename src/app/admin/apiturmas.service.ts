import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiturmasService {
  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTurmas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/turmas');
  }

  getMaticulasNaTurma(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'matriculas?turmaId='+id);
  }

  getProfessoresNaTurma(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'professoresNasTurmas?turmaId='+id+'&_expand=professor');
  }



}
