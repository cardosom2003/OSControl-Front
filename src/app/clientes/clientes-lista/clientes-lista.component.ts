import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../clientes/cliente';


@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss'],
  preserveWhitespaces: true
})
export class ClientesListaComponent implements OnInit {
  erro: any;
  clientes: Cliente[];
  constructor(private service: ClientesService) {
    this.listar();
  }

  ngOnInit() { }

  public listar(){
    this.service.list().subscribe(dados => this.service = dados);
  }
/*
  getter(){
    this.service.list().subscribe((data: Cliente[])=>{
      this.clientes = data;
      console.log('o dado recebido', data);
      console.log('O dado que foi preenchido', this.clientes);

    },(error: any) => {
      this.erro = error;
      console.error('Error: ', error);

    });
  }
*/
}
