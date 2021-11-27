import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from '../cliente';
import { ClientesService } from '../clientes.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
public clientes=[];
public columnas=['nombre','direccion','eliminar']
  constructor(private router:Router,private clienteService:ClientesService) { }
  async obtenerClientes(){
    this.clientes= await this.clienteService.obtenerclientes();
  }
  navegarAFormulario() {
    this.router.navigateByUrl("/clientes/agregar");
  }
 async ngOnInit() {
    await this.obtenerClientes();
  }
  async eliminar(cliente:cliente) {
    if (!confirm("¿Realmente lo quieres eliminar?")) {
      return;
    }
    await this.clienteService.eliminarCliente(cliente.id_clientes);
    await this.obtenerClientes();
  }
}
