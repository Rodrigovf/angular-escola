import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FrequenciasService } from './frequencias.service';
import { FrequenciaComponent } from './frequencia/frequencia.component';
import { ListaDeFrequenciasComponent } from './lista-de-frequencias/lista-de-frequencias.component';
import { CadastroDeFrequenciaComponent } from './cadastro-de-frequencia/cadastro-de-frequencia.component';
import { RelatorioTurmasComponent } from './relatorio-turmas/relatorio-turmas.component';
import { ApiturmasService } from './apiturmas.service';
import { CadastroDeMatriculaComponent } from './cadastro-de-matricula/cadastro-de-matricula.component';
import { ApiService } from './api.service';
import { ListaDeMatriculasComponent } from './lista-de-matriculas/lista-de-matriculas.component';


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
    PaginaNaoEncontradaComponent,
    CadastroDeFrequenciaComponent,
    FrequenciaComponent,
    ListaDeFrequenciasComponent,
    RelatorioTurmasComponent,
    CadastroDeMatriculaComponent,
    ListaDeMatriculasComponent
  ],
  providers: [
    FrequenciasService,
    ApiturmasService,
    ApiService
  ]
})
export class AdminModule {
}
