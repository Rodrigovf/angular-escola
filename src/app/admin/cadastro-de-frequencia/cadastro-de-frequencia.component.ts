import { Component, OnInit } from '@angular/core';
import {FrequenciasService} from "../frequencias.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-de-frequencia',
  templateUrl: './cadastro-de-frequencia.component.html',
  styleUrls: ['./cadastro-de-frequencia.component.css']
})
export class CadastroDeFrequenciaComponent implements OnInit {
disciplinas=[];
turmas=[];
professores=[];
horarios=[];
alunos=[];
disciplina;
turma;
professor;
horario;
aluno;
data;
status;
cadastro_ok = false;
cadastro_erro = false;

  constructor(private frequenciasService: FrequenciasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.frequenciasService.getDisciplinas()
    .subscribe(disciplinas => this.disciplinas = disciplinas);

    this.frequenciasService.getTurmas()
    .subscribe(turmas => this.turmas = turmas );

    this.frequenciasService.getProfessores()
    .subscribe(professores => this.professores = professores);

    this.frequenciasService.getHorarios()
    .subscribe(horarios => this.horarios = horarios);

    this.frequenciasService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);
  }

  salvar() {
    this.frequenciasService.save(parseInt(this.turma),parseInt(this.disciplina),parseInt(this.professor),parseInt(this.horario),parseInt(this.aluno),this.data,this.status)
      .subscribe(
        turma => {
          this.cadastro_ok = true;
          this.limpar();
        },
        erro => {
          this.cadastro_erro = true;
          this.cadastro_ok = false;
        }
      );
  }

  limpar(){
    this.turma=null;
    this.disciplina=null;
    this.professor=null;
    this.horario=null;
    this.aluno=null;
    this.data=null;
    this.status=null;

  }

}
