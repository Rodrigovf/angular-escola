import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FrequenciasService } from './frequencias.service';
import { ApiturmasService } from './apiturmas.service';
import { ApiService } from './api.service';
import { GerenciarTurmasComponent } from './gerenciar-turmas/gerenciar-turmas.component';
import { RegsitroDeNotasComponent } from './regsitro-de-notas/regsitro-de-notas.component';
import { GerenciarDisciplinaComponent } from './gerenciar-disciplina/gerenciar-disciplina.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    PaginaNaoEncontradaComponent,
    GerenciarTurmasComponent,
    RegsitroDeNotasComponent,
    GerenciarDisciplinaComponent,
  ],
  providers: [
    FrequenciasService,
    ApiturmasService,
    ApiService
  ]
})
export class AdminModule {
}
