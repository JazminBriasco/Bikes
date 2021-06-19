import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //Debería ser clienteProducto


  productos: any =
    [
      {
        "id": 1,
        "name": "Jeff Miller",
        "email": "jeff@bikes.com",
        "phone": "328-443-5555",
        "model": "Globo MTB 29 Full Suspension",
        "serialNumber": null,
        "purchasePrice": 1100,
        "purchaseDate": "01-20-2110",
        "contact": true
      },
      {
        "id": 4,
        "name": "alejandror",
        "email": "alexdeassis@gmail.com",
        "phone": "32123-5555",
        "model": "Gluspension",
        "serialNumber": "12312312332",
        "purchasePrice": 1340,
        "purchaseDate": "01-20-2110",
        "contact": true
      },
      {
        "id": 8,
        "name": "alejandror",
        "email": "alexdeassis@gmail.com",
        "phone": "32123-5555",
        "model": "Gluspension",
        "serialNumber": "12312312332",
        "purchasePrice": 1340,
        "purchaseDate": "01-20-2110",
        "contact": true
      },
      {
        "id": 9,
        "name": "tulio",
        "email": "alexdeassis@gmail.com",
        "phone": "32123-5555",
        "model": "Gluspension",
        "serialNumber": "12312312332",
        "purchasePrice": 1340,
        "purchaseDate": "01-20-2110",
        "contact": true
      }
    ]
  

  constructor() { }
}
