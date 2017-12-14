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
import { ApiturmasService } from './apiturmas.service';
import { ApiService } from './api.service';
import { GerenciarTurmasComponent } from './gerenciar-turmas/gerenciar-turmas.component';


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
    GerenciarTurmasComponent,
  ],
  providers: [
    FrequenciasService,
    ApiturmasService,
    ApiService
  ]
})
export class AdminModule {
}
