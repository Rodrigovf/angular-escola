import { Component, OnInit } from '@angular/core';
import {ApiturmasService} from "../apiturmas.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-relatorio-turmas',
  templateUrl: './relatorio-turmas.component.html',
  styleUrls: ['./relatorio-turmas.component.css']
})
export class RelatorioTurmasComponent implements OnInit {
  turmas=[];
  constructor(private api:ApiturmasService, private route: Router) { }

  ngOnInit() {
    this.api.getTurmas()
    .subscribe(turmas => {
      for (let turma of turmas) {
        this.api.getProfessoresNaTurma(turma.id)
          .subscribe(professores => {
            turma.professores = [];
            for (const professor of professores) {
              turma.professores.push(professor.professor.nome);
            }
            console.log(turma.professores)
            turma.professores = turma.professores.join(', ');
          });
        this.api.getMatriculasNaTurma(turma.id)
          .subscribe(matriculas => {
            turma.quantidade_de_alunos = matriculas.length;
            console.log(matriculas)
          });
      }
      this.turmas = turmas;
    });
  }

}
