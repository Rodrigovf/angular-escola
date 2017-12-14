import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from '../api.service';


@Component({
  selector: 'app-cadastro-de-matricula',
  templateUrl: './cadastro-de-matricula.component.html',
  styleUrls: ['./cadastro-de-matricula.component.css']
})
export class CadastroDeMatriculaComponent implements OnInit {
  id=null;
  codigo=null;
  nome=null;
  alunos=[];
  turmas=[];
  turma=null;
  aluno=null;
  cadastro_ok;
  cadastro_erro;
  
  
  
  constructor(private api: ApiService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.api.getMatricula(this.id)
        .subscribe(matricula => {
          this.turma = matricula.turma;
          this.aluno = matricula.aluno;
          
        });
    }

    this.api.getAlunos()
    .subscribe(alunos => this.alunos = alunos)

    this.api.getTurmas()
    .subscribe(turmas => this.turmas = turmas)
  }

  salvar() {
    this.api.addMatricula(parseInt(this.turma),parseInt(this.aluno))
      .subscribe(
        turma => {
          this.cadastro_ok = true;
          this.cadastro_erro = false;
         // this.limpar();
        },
        erro => {
          this.cadastro_erro = true;
          this.cadastro_ok = false;
        }
      );
  }

}
