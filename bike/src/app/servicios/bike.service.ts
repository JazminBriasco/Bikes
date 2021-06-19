import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Constante para el body del insert, le indicamos el tipo de dato, es un json
const httpOption = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'}) //Content type
}

@Injectable({
  providedIn: 'root'
})

export class BikeService {

  //Inyección del objeto HTTP Client
  constructor(private http:HttpClient) {
  }
 
  //GET ALL => retorna todo el arreglo
  getBikes(){
    return this.http.get('/server/api/v1/bikes');
  }

  //INSERT => Inserta un registro en la DB del api rest
  createdBikeRegistrarion(bike: any){
    return this.http.post('/server/api/v1/bikes', bike, httpOption);
  }

  //GET BY ID
  getBikeById(id: number){
    return this.http.get('http://localhost:9090/api/v1/bikes/'+ id);    
    //return this.http.get('http://localhost:9090/api/v1/bikes/${id}');    
  }

}
