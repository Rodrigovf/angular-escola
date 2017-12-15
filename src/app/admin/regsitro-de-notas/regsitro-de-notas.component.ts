import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-regsitro-de-notas',
  templateUrl: './regsitro-de-notas.component.html',
  styleUrls: ['./regsitro-de-notas.component.css']
})
export class RegsitroDeNotasComponent implements OnInit {
  alunos=[];
  aluno=null;
  nota1=null;
  nota2=null;
  nota3=null;
  nota4=null;
  turmaId=null;
  disciplinaId=null


 
  constructor(private api: ApiService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.turmaId= parseInt(this.route.snapshot.paramMap.get('id'));
    this.disciplinaId = parseInt(this.route.snapshot.paramMap.get('disciplinaId'));
    
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) {
      console.log(id);
      this.api.getAlunosTurma(id).subscribe(alunos => this.alunos = alunos);
      
    }
  }

  salvar(){
    this.api.addNotas(parseInt(this.turmaId),parseInt(this.aluno),parseInt(this.disciplinaId),this.nota1,this.nota2,this.nota3,this.nota4)
    .subscribe(
      funcionario => {  }
    );
  }

  
}
