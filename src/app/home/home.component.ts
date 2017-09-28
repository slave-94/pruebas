import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RopaService]
})
export class HomeComponent implements OnInit {

  public titulo = "Pagina de inicio";

  public listado:Array<string>;
  public item:string;

  public fecha:Date;

  public itemSaved:string;


  constructor(
    private _ropaService:RopaService
  ) 
  { 
    this.fecha = new Date(1994,9,20);
    this.itemSaved = localStorage.getItem('itemSaved');
  }

  ngOnInit() 
  {
    this.listado = this._ropaService.getRopa();
    console.log(this._ropaService.prueba());
  }

  guardarItem()
  {
    this._ropaService.addRopa(this.item);
  }

  borrarItem(i:number)
  {
    this._ropaService.removeItem(i);
  }

  delete()
  {
    localStorage.clear();
  }

}
