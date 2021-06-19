import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})

export class ImageDetailsComponent implements OnInit {
    idUrl:number;
    url: string;

  constructor(private route: ActivatedRoute) { 
    this.idUrl= this.route.snapshot.params.id;
    this.url = "../../../assets/bici" + this.idUrl + ".jpg";

  }
  
  
  ngOnInit(): void {
  }

}
