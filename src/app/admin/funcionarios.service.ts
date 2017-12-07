import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class FuncionariosService {
  API_URL = 'http://localhost:3000';
  funcionario;

  constructor(private http: HttpClient) { }


  save(tipoId:number, pessoaId: number, cargoId: number, funcaoId: Array<any>) {
    const funcionario = {'tipoId':tipoId, 'pessoaId': pessoaId, 'cargoId': cargoId, 'funcaoId':funcaoId};
    return this.http.post(this.API_URL + '/funcionarios', funcionario);
  }

  addFunc(tipoId:number, pessoaId: number, cargoId: number, funcaoId: Array<any>) {
    const funcionario = {'tipoId':tipoId, 'pessoaId': pessoaId, 'cargoId': cargoId, 'funcaoId':funcaoId};
    return this.http.post(this.API_URL + '/funcionarios', funcionario);
  }

}

