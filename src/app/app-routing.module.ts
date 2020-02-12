import { OrdensServicoComponent } from './ordens-servico/ordens-servico.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'clientes'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'equipamentos', component: EquipamentosComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'ordemservicos', component: OrdensServicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
