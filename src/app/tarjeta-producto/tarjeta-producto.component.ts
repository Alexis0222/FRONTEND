import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent implements OnInit {
@Input() producto:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public resolverRuta(){
    const baseUrl=environment.imagenUrl;
    return `${baseUrl}foto_producto/${this.producto.foto}`;

  }

  public detalles(){
    this.router.navigate(["/producto/detalle",this.producto.id_productos]);
  }

}
