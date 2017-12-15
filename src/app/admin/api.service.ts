import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {
  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  //Serviços do requisito um
  getTurmas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/turmas');
  }
  getTurma(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/turmas/'+id);
  }

 

  getProfessoresNaTurma(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/professoresNasTurmas?turmaId='+id+'&_expand=professor&_expand=disciplina');
  }
//################################################################################################################

  // Serviçoes do requisito dois 

  getAlunosTurma(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL +'/matriculas?turmaId='+id+'&_expand=aluno');
   }

   addNotas(turmaId: number, alunoId: number ,disciplinaId: number, nota1:number,nota2:number,nota3:number,nota4:number) 
   {
   const nota = {turmaId: turmaId, alunoId: alunoId,
     disciplinaId: disciplinaId, nota1:nota1,nota2:nota2,
     nota3:nota3,nota4:nota4};
   return this.http.post(this.API_URL + '/notas', nota);
 }



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