import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-lista-de-matriculas',
  templateUrl: './lista-de-matriculas.component.html',
  styleUrls: ['./lista-de-matriculas.component.css']
})
export class ListaDeMatriculasComponent implements OnInit {
  matriculas=[];
  excluir_ok=null;
  excluir_erro=null;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.atualizarLista();
  }

  excluir(matricula: any) {
    this.api.deleteMatricula(matricula.id)
      .subscribe(ok => {
          this.excluir_ok = true;
          this.excluir_erro = false;
          this.atualizarLista();
        },
        erro => {
          this.excluir_ok = false;
          this.excluir_erro = true;
        });
  }





  atualizarLista(){
    this.api.getMatriculas()
    .subscribe(matriculas => this.matriculas = matriculas)
  }
}
