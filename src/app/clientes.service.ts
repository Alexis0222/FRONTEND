import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { cliente } from './cliente';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpService) { }

  public async obtenerclientes(){
    return await this.http.get("/clientes");
  }

  public async agregarCliente(cliente:cliente){
    return await this.http.post("/cliente",cliente);
  }
  public async eliminarCliente(id_clientes: number) {
    console.log(id_clientes);
    return await this.http.delete("/cliente?id=".concat(id_clientes.toString()));
  }

}
