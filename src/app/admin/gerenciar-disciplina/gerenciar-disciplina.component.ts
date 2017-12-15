import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-gerenciar-disciplina',
  templateUrl: './gerenciar-disciplina.component.html',
  styleUrls: ['./gerenciar-disciplina.component.css']
})
export class GerenciarDisciplinaComponent implements OnInit {
turma=[];
disciplina=[];
professor=[];
alunoNotas=[];


 
  constructor(private api: ApiService, private route:ActivatedRoute) { }

  ngOnInit() {
   // this.turmaId= parseInt(this.route.snapshot.paramMap.get('id'));
    //this.disciplinaId = parseInt(this.route.snapshot.paramMap.get('disciplinaId'));
    
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    const disciplinaId = parseInt(this.route.snapshot.paramMap.get('disciplinaId'));
      
    this.api.getTurma(id)
    .subscribe(turma => this.turma = turma);

    this.api.getProfessoresNaTurma(id)
    .subscribe(disciplina => this.disciplina = disciplina);

    this.api.getProfDaDisciplinaNaTurma(id,disciplinaId)
    .subscribe(professor => this.professor = professor)

    this.api.getAlunoNaDisciplinaDaTurma(id,disciplinaId)
    .subscribe(alunoNotas => this.alunoNotas = alunoNotas)


    
  }
    

}
