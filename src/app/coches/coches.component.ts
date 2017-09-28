import { Component, OnInit } from '@angular/core';
import { Coche } from './coche'

import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers:[PeticionesService]
})
export class CochesComponent implements OnInit {

	public coche:Coche;
  public coches:Array<Coche>;
  public photos;

  constructor(
    private peticiones:PeticionesService
    ) { 
  	this.coche = new Coche('','','');
    this.coches = [
      new Coche('Default','Default','Default')
    ];
  }

  ngOnInit() {
    console.log(this.peticiones.greet());
    this.peticiones.getPhotos().subscribe(
        result=>{
          console.log(result);
          this.photos = result;
        }, error=>{
          var error = <any>error;
          console.log(error);
        });
  }

  submitear()
  {
    this.coches.push(this.coche);
    this.save(this.coche.nombre);
    this.coche = new Coche('','','');
  }

  save(value)
  {
    console.log(value);
    localStorage.setItem('itemSaved',value);
    console.log(localStorage.getItem('itemSaved'));
  }

}
