import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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
  id = null;
  isChecked;
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
  atualizar_ok = false;
  atualizar_erro = false;

  constructor(private pessoasService: PessoasService,
              private funcionariosService: FuncionariosService,
              private cargosService: CargosService,
              private funcoesService: FuncoesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.funcionariosService.getFuncionario(this.id)
        .subscribe(funcionario => {
          this.funcionario.tipoId = funcionario.tipoId;
          this.funcionario.pessoaId = funcionario.pessoaId;
          this.funcionario.cargoId = funcionario.cargoId;
          this.funcionario.funcoes = funcionario.funcaoId;
        });
    }

    if(this.funcionario.cargoId.id==2){
      this.isChecked = true;
    }
   
    this.pessoasService.getPessoas()
      .subscribe(pessoas => this.pessoas = pessoas);

    this.cargosService.getCargos()
      .subscribe(cargos => this.cargos = cargos);

    this.funcoesService.getFuncoes()
      .subscribe(funcoes => this.funcoes = funcoes);


  }

  salvar() {
    if (this.id) {
      console.log ( this.id );
      this.funcionariosService.updateFuncionario(this.id,parseInt(this.funcionario.tipoId),parseInt(this.funcionario.pessoaId),parseInt(this.funcionario.cargoId),this.funcionario.funcoes)
        .subscribe(funcionario => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      console.log ( this.id );
      this.funcionariosService.addFuncionario(parseInt(this.funcionario.tipoId),parseInt(this.funcionario.pessoaId),parseInt(this.funcionario.cargoId),this.funcionario.funcoes)
      .subscribe(
        funcionario => {
          this.limpar();
          this.cadastro_erro = false;
          this.cadastro_ok = true;
        },
        erro => {
          this.cadastro_erro = true;
          this.cadastro_ok = false;
        }
      );
    }
  }

  limpar() {
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }
  
}
