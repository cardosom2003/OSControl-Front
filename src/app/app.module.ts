import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { OrdensServicoComponent } from './ordens-servico/ordens-servico.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EquipamentosComponent,
    FuncionariosComponent,
    OrdensServicoComponent,
    ClientesListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
