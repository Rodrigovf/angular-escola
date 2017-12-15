import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-gerenciar-turmas',
  templateUrl: './gerenciar-turmas.component.html',
  styleUrls: ['./gerenciar-turmas.component.css']
})
export class GerenciarTurmasComponent implements OnInit {

  constructor(private api: ApiService, private route:ActivatedRoute) { }
  turma=[];
  disciplinas=[];
  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.api.getTurma(id)
        .subscribe(turma => this.turma = turma);
        this.api.getProfessoresNaTurma(id).subscribe(disciplinas => this.disciplinas = disciplinas)
      
    }
    console.log(this.disciplinas);



    



  }

}
