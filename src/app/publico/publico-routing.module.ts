import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PublicoComponent} from "./publico/publico.component";

const routes: Routes = [
  {
    path: 'teste', component: PublicoComponent, children: [
      {path: 'teste1', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule {
}
