import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeService } from 'src/app/servicios/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**Atributos */
  models: string [] = [
      'Bike 14 Sony',
      'Globo rice Mercedez',
      'Master Bike Junior',
      'Bike Pro 24',
      'Bike Carbo Fiber Race Series'
  ];

  bikeform: FormGroup;

  validMessage: string = "";

  constructor(private bikeService: BikeService) {
    /**El formGroup recibeun objeto con los formControls */
      this.bikeform = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.pattern('@([A-Za-z0-9_]{1,15})')]), /**Valor por defecto, validador (formato nombre de twitter en este ejempo), con expresiones regulares */
        email: new FormControl('', Validators.email), 
        phone: new FormControl('', [Validators.required, Validators.pattern('\\+54\\s[0-9]{1,4}\\s15[0-9]{8}')]), /*Empieza con +54 , seguido de un espacio, numero entre 0 y 9, máximo 4 números, mínumo 1, espacio números del 0 a 9, cantidad 15*/
        model: new FormControl('', Validators.required), 
        serialNumber: new FormControl('', Validators.required), 
        purchasePrice: new FormControl('', [Validators.required, Validators.pattern('^([1-9][0-9]{0,4}|100000)$')]), 
        // '^(?:[1-9][0-9]{0,4}(?:.d{1,2})?|100000|100000.00)$'
        purchaseDate: new FormControl('',[Validators.required ,Validators.pattern('(([1-2][0-9])|([1-9])|(3[0-1]))-((1[0-2])|([1-9]))-[0-9]{4}')]),
        contact: new FormControl('', Validators.required), 
      });
   }

  ngOnInit(): void {
  /*  console.log("ngOnInit : ");
    console.log("Que tiene un FormGroup en su interior??: ");
    console.log(this.bikeform);*/
  }

  /**Creamos un getters para acceder a los controles del FormGroup desde el HTML */
  get controles(){
    return this.bikeform.controls;//Arreglo de controles de un form group específico (bikeform)
  }

  //Método llamado desde el HTML --> (ngSubmit) = "submitRegistration()"
  submitRegistration(){
    console.log("estos son los datos que estariamos enviando al back end !");
    console.log(this.bikeform.value)
    console.log("el formulario es valido ? " + this.bikeform.valid);
    if(this.bikeform.valid){

      this.bikeService.createdBikeRegistrarion(this.bikeform.value).subscribe(
        data => {
          this.validMessage = "Su Formulario Se Envio Con Exito";
        //  this.bikeform.reset();
        },
        err =>{
          this.validMessage = "Su Registro no pudo ser enviado, intente nuevamente";
          console.error(err);
        }
      );

    }else{
      this.validMessage = "Su Formulario Esta Incompleto";
    }
  }
}


