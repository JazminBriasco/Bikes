import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/servicios/bike.service';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  clientes: any;
  cliente: any;

  //Inytectamos el zservicio en el constructor
  constructor(private clientesService: ProductosService, private bikeServices:BikeService) {
      //this.clientes = this.clientesService.productos;
      //console.log(this.clientes);
      
      //Obtenermos los datos del servicio inyectado del backend
      console.log("Servicio Admin Proxy -->");
      this.bikeServices.getBikes().subscribe(
          data => { this.clientes = data },
          err => { console.log(err) }
      );

    }
  }
