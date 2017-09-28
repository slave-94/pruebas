import {Component} from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})

export class FrutaComponent
{
  public listado_frutas: Array<string> = ["LSD","Cocaine","Heroin"]; 
  public nombre_componente:string;// = 'Componente de fruta';
  public valor_a_enviar:string;

  constructor()
  {
    this.valor_a_enviar = 'algo';
    this.nombre_componente = 'Dulces';//this.listado_frutas[0];
  }

  ngOnInit()
  {
    //this.cambiarFrutas();
  }

  cambiarFrutas()
  {

    
    for(let i=0;i<this.listado_frutas.length;i++)
    {
      for(let j=0;j<this.listado_frutas.length;j++)
      {
        if(this.listado_frutas[i].charAt(0)<this.listado_frutas[j].charAt(0))
        {
          var tmp = this.listado_frutas[i];
          this.listado_frutas[i] = this.listado_frutas[j];
          this.listado_frutas[j] = tmp;
        }
      }
    }
  }

  verDatos(event)
  {
    console.log(event);
  }
}