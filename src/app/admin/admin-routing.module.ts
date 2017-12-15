import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { GerenciarTurmasComponent } from './gerenciar-turmas/gerenciar-turmas.component';
import { RegsitroDeNotasComponent } from './regsitro-de-notas/regsitro-de-notas.component';
import { GerenciarDisciplinaComponent } from './gerenciar-disciplina/gerenciar-disciplina.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: 'turmas/:id', component: GerenciarTurmasComponent},
      {path: '', component: GerenciarTurmasComponent},
      {path: 'turmas/:id/disciplinas/:disciplinaId/registrar-notas', component: RegsitroDeNotasComponent},
      {path: 'turmas/:id/disciplinas/:disciplinaId', component: GerenciarDisciplinaComponent},
      {path: '**', component: PaginaNaoEncontradaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
