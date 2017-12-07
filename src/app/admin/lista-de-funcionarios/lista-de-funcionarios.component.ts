import { Component, OnInit } from '@angular/core';
import {FuncionariosService} from "../funcionarios.service";
import {PessoasService} from "../pessoas.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-de-funcionarios',
  templateUrl: './lista-de-funcionarios.component.html',
  styleUrls: ['./lista-de-funcionarios.component.css']
})
export class ListaDeFuncionariosComponent implements OnInit {
  funcionarios = [];

  excluir_ok = false;
  excluir_erro = false;

  constructor(private funcionariosService: FuncionariosService,
              private pessoasService: PessoasService,
              private router: Router) { }

  ngOnInit() {
    this.atualizarLista();
  }
  excluir(funcionario: any) {
    this.funcionariosService.delete(funcionario.id)
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

  atualizarLista() {
    this.funcionariosService.getFuncionarios()
      .subscribe(funcionarios => this.funcionarios = funcionarios);
  }

  abrir(funcionario: any) {
    this.router.navigate(['admin', 'funcionarios', funcionario.id]);
  }
}
