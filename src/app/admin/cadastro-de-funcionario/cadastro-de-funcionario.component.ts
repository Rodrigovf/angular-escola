import {Component, OnInit} from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {FuncionariosService} from "../funcionarios.service";
import {CargosService} from "../cargos.service";
import {TiposService} from "../tipos.service";
import {FuncoesService} from "../funcoes.service";

@Component({
  selector: 'app-cadastro-de-funcionario',
  templateUrl: './cadastro-de-funcionario.component.html',
  styleUrls: ['./cadastro-de-funcionario.component.css'],
})
export class CadastroDeFuncionarioComponent implements OnInit{
  pessoas: any[];
  cargos:any[];
  funcoes:any[];
  funcionario: any = {
    tipoId: '',
    pessoaId: '',
    cargoId: '',
    funcoes:'',
};
  cadastro_ok = false;
  cadastro_erro = false;

  constructor(private pessoasService: PessoasService,
              private funcionariosService: FuncionariosService,
              private cargosService: CargosService,
              private funcoesService: FuncoesService) {
  }

  ngOnInit() {
    this.pessoasService.getPessoas()
      .subscribe(pessoas => this.pessoas = pessoas);

    this.cargosService.getCargos()
      .subscribe(cargos => this.cargos = cargos);

    this.funcoesService.getFuncoes()
      .subscribe(funcoes => this.funcoes = funcoes);
  }

  salvar() {
    this.funcionariosService.save(parseInt(this.funcionario.tipoId),parseInt(this.funcionario.pessoaId),parseInt(this.funcionario.cargoId),this.funcionario.funcoes)
      .subscribe(
        funcionario => {
          this.limpar();
          this.cadastro_ok = true;
        },
        erro => {
          this.cadastro_erro = true;
          this.cadastro_ok = false;
        }
      );
  }
  c () {
    console.log ( this.funcionario );
    console.log ( this.funcionario.pessoaId );
    console.log ( this.funcionario.funcoes );
}

  limpar() {
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }
}
