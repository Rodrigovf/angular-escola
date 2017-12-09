import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FrequenciasService {
  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  frequencias=[];


  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/disciplinas');
  }

  getDisciplina(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/disciplinas/' + id );
  }
  getProfessores(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/professors');
  }

  getProfessor(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/professores/' + id);
  }
  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/alunos');
  }

  getAluno(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/alunos/' + id);
  }

  getTurmas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/turmas');
  }

  getTurma(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/turmas/' + id);
  }

  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/horarios');
  }

  getHorario(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/horarios/' + id);
  }

  getMatriculas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/matriculas');
  }

  getMatricula(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/matriculas/' + id);
  }
  
  getFrequencias(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/frequencias/?_expand=turma&_expand=disciplina&_expand=professor&_expand=horario&_expand=aluno');
  }

  save(turmaId: number, disciplinaId: number, professorId: number, horarioId: number, alunoId: number, data: string,  status: string ) {
    const frequencia = {'turmaId': turmaId, 'disciplinaId': disciplinaId, 'professorId': professorId, 'horarioId': horarioId, 'alunoId': alunoId, 'data': data,  'status': status};
    return this.http.post(this.API_URL + '/frequencias', frequencia);
  }

}