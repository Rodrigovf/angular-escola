import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class FuncionariosService {
  API_URL = 'http://localhost:3000';
  funcionarios=[];

  constructor(private http: HttpClient) { }
  
  getFuncionarios(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/funcionarios/?_expand=tipo&_expand=cargo&_expand=pessoa');
  }
  
  getFuncionario(id: number): Observable<any> {
    return this.http.get<any>(this.API_URL + '/funcionarios/' + id + '?_expand=tipo&_expand=cargo&_expand=pessoa');
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/funcionarios/' + id);
  }

  addFuncionario(tipoId:number, pessoaId: number, cargoId: number, funcaoId: Array<any>) {
    const funcionario = {'tipoId':tipoId, 'pessoaId': pessoaId, 'cargoId': cargoId, 'funcaoId':funcaoId};
    return this.http.post(this.API_URL + '/funcionarios', funcionario);
  }

  updateFuncionario(id: number, tipoId:number, pessoaId: number, cargoId: number, funcaoId: Array<any>): Observable<any> {
    const funcionario = {'tipoId':tipoId, 'pessoaId': pessoaId, 'cargoId': cargoId, 'funcaoId':funcaoId};
    return this.http.patch(this.API_URL + '/funcionarios/' + id, funcionario);
  }


  c() {
    console.log(this.funcionarios);
}
  
}

