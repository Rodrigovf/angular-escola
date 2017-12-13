import { Component, OnInit } from '@angular/core';
import {FrequenciasService} from "../frequencias.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-de-frequencias',
  templateUrl: './lista-de-frequencias.component.html',
  styleUrls: ['./lista-de-frequencias.component.css']
})
export class ListaDeFrequenciasComponent implements OnInit {
  frequencias=[];
  indice_alunos= [];
  qtd_presencas=[];
  qtd_faltas=[];
  
  constructor(private api: FrequenciasService,
    private router: Router) { 

    }

  ngOnInit() {
    this.api.getFrequencias()
    .subscribe(frequencias => {
      for (const frequencia of frequencias){
        if (this.indice_alunos.indexOf(frequencia.turmaId +'-' + frequencia.disciplinaId +'-'+ frequencia.alunoId)=== -1){
          this.frequencias.push(frequencia);
          this.indice_alunos.push(frequencia.turmaId +'-' + frequencia.disciplinaId +'-' +frequencia.alunoId);
          this.qtd_faltas.push(0);
          this.qtd_presencas.push(0);
        }
      }
      for (let i = 0; i < this.indice_alunos.length; i ++){
        const vta = this.indice_alunos[i].split('-');
        const turmaId = vta[0];
        const disciplinaId = vta[1];
        const alunoId = vta[2];
        const frequencias_aluno = frequencias.filter(item => 
          item.alunoId === alunoId
          && item.turmaId === turmaId
          && item.disciplinaId === disciplinaId);
      for (let j =0; j < frequencias_aluno.length; i++){
        if (frequencias_aluno[j].status === 'P'){
          this.qtd_presencas[i]++;
        }else{
          this.qtd_faltas[i]++;
        }  
      }
      this.frequencias[i].qtd_presencas = this.qtd_presencas[i];
      this.frequencias[i].qtd_faltas = this.qtd_faltas[i];
      }
    });
  }

}
