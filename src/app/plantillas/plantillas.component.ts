import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

  public titulo;
  public administrador;

  constructor() { 
  	this.titulo = "ngTemplate en Angular";
  	this.administrador = true;
  }

  ngOnInit() {
  }

  cambiar()
  {
  	if(!this.administrador)
  		this.administrador = true;
  	else
  		this.administrador = false;
  }

}
