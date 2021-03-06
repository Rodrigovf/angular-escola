import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {TurmaComponent} from './turma/turma.component';
import {DisciplinasService} from './disciplinas.service';
import {TurmasService} from './turmas.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ListaDePessoasComponent } from './lista-de-pessoas/lista-de-pessoas.component';
import {CadastroDePessoaComponent} from './cadastro-de-pessoa/cadastro-de-pessoa.component';
import {PessoasService} from './pessoas.service';
import { FuncionariosService } from './funcionarios.service';
import { CadastroDeFuncionarioComponent } from './cadastro-de-funcionario/cadastro-de-funcionario.component';
import { CargosService } from './cargos.service';
import { TiposService } from './tipos.service';
import { FuncoesService } from './funcoes.service';
import { ListaDeFuncionariosComponent } from './lista-de-funcionarios/lista-de-funcionarios.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    AdminComponent,
    CadastroDeDisciplinaComponent,
    CadastroDeTurmaComponent,
    DisciplinaComponent,
    ListaDeDisciplinasComponent,
    ListaDeTurmasComponent,
    TurmaComponent,
    PaginaNaoEncontradaComponent,
    PessoaComponent,
    ListaDePessoasComponent,
    CadastroDePessoaComponent,
    CadastroDeFuncionarioComponent,
    ListaDeFuncionariosComponent,
    FuncionarioComponent
  ],
  providers: [
    DisciplinasService,
    TurmasService,
    PessoasService,
    FuncionariosService,
    CargosService,
    TiposService,
    FuncoesService
  ]
})
export class AdminModule {
}
