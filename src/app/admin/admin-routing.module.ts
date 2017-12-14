import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastroDeFrequenciaComponent } from './cadastro-de-frequencia/cadastro-de-frequencia.component';
import { FrequenciaComponent } from './frequencia/frequencia.component';
import { ListaDeFrequenciasComponent } from './lista-de-frequencias/lista-de-frequencias.component';
import { RelatorioTurmasComponent } from './relatorio-turmas/relatorio-turmas.component';
import { CadastroDeMatriculaComponent } from './cadastro-de-matricula/cadastro-de-matricula.component';
import { ListaDeMatriculasComponent } from './lista-de-matriculas/lista-de-matriculas.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: 'frequencias/relatorio', component: ListaDeFrequenciasComponent},
      {path: 'frequencias/cadastrar', component: CadastroDeFrequenciaComponent},
      {path: 'turmas/relatorio', component: RelatorioTurmasComponent},
      {path: 'turmas/cadastrar', component: CadastroDeMatriculaComponent},
      {path: 'matriculas/cadastrar', component: CadastroDeMatriculaComponent},
      {path: 'matriculas/:id/editar', component: CadastroDeMatriculaComponent},
      {path: 'matriculas/relatorio', component: ListaDeMatriculasComponent},
      

      {path: '', component: ListaDeFrequenciasComponent},
      {path: '**', component: PaginaNaoEncontradaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
