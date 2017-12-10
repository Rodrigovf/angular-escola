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
  alunos=[];
  constructor(private frequenciasService: FrequenciasService,
    private router: Router) { 

    }

  ngOnInit() {
    this.frequenciasService.getFrequencias()
    .subscribe(frequencias => this.frequencias = frequencias);

    this.frequenciasService.getAlunos()
    .subscribe(alunos => this.alunos = alunos);
    
  }

}
