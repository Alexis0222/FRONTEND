import { Component, OnInit } from '@angular/core';
import { cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
clientModel=new cliente("","",0)
  constructor(private clienteService:ClientesService,private snackbar:MatSnackBar) { }
  public cargando=false;
  ngOnInit(): void {
  }
  async guardar(){
    if(!this.clientModel.nombre){
      return alert("falto el nombre");

    }
    if(!this.clientModel.direccion){
      return alert("falto la direccion");

    }
   this.cargando=true;
   const idClienteGuardado= await this.clienteService.agregarCliente(this.clientModel);

  }

}
