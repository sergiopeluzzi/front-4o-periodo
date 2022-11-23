import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  titulo = 'Clientes';

  clientes!: any[];

  pessoa = {
    nome: 'João',
    idade: 20,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 1000,
    },
  };

  nome: string = 'João';
  idade: number = 40;
  cpf: string = '123.456.789-00';

  constructor() {}

  ngOnInit(): void {
    this.buscarClientes();
  }

  buscarClientes() {
    this.clientes = [
      { id: 1, nome: 'João', idade: 20 },
      { id: 2, nome: 'Maria', idade: 30 },
      { id: 3, nome: 'José', idade: 40 },
    ];
  }
}
