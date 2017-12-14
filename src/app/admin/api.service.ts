import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {
  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //Serviços do requisito 1
  getTurmas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/turmas');
  }
  getTurma(id: number): Observable<any> {
    return this.http.get<any>(this.API_URL +'/turmas/'+id);
  }

  getMaticulasNaTurma(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'matriculas?turmaId='+id);
  }

  getProfessoresNaTurma(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'professoresNasTurmas?turmaId='+id+'&_expand=professor&_expand=disciplina');
  }
//################################################################################################################

  // Reronas alunos e aluno id
  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/alunos');
  }

  getAluno(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/alunos/'+id);
  }

  addMatricula(turmaId: number, alunoId: number ) 
   {
   const matricula = {turmaId: turmaId, alunoId: alunoId};
   return this.http.post(this.API_URL + '/matriculas', matricula);
 }

 updateMatricula(id:number, turmaId: number, alunoId: number ) 
 {
 const matricula = {turmaId: turmaId, alunoId: alunoId};
 return this.http.put(this.API_URL + '/matriculas/'+id, matricula);
}

  getMatriculas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/matriculas?_expand=turma&_expand=aluno');
  }

  getMatricula(id:number): Observable<any> {
    return this.http.get<any[]>(this.API_URL +'/matriculas/'+id+'?_expand=turma&_expand=aluno');
  }
  matriculasNaTurma(id:number): Observable<any> {
    return this.http.get<any[]>(this.API_URL +'/matriculas?turmaId='+id);
  }

  deleteMatricula(id:number): Observable<any> {
    return this.http.delete(this.API_URL + '/matriculas/'+id)
  }
}