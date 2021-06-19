import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/servicios/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
    bike:any;

  constructor(private bikeService:BikeService, private route: ActivatedRoute) {  //Inyecto el servicio
    this.getOneBike(this.route.snapshot.params.id);  //De la ruta actual el id
  }

  ngOnInit(): void {
  }
  
  getOneBike(id:number){
    this.bikeService.getBikeById(id).subscribe(
      data => {
        //obtengo el registro por su id
        this.bike = data;
      }
      );
    }
  


}
