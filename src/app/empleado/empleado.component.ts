import {Component} from '@angular/core';
import {Empleado} from './empleado'

@Component({
  selector:'empleado',
  templateUrl:'./empleado.component.html',
  styleUrls:['./empleado.component.css']
})

export class EmpleadoComponent
{
  public nombre = 'Slave19';
  public folio = '191094';

  public empleado:Empleado;
  public empleados:Array<Empleado>;

  constructor()
  {
    this.empleados = [
      new Empleado('Creep',25,true),
      new Empleado('Fake',12,false),
      new Empleado('Days',13,true),
      new Empleado('Dark',14,false),
      new Empleado('You',15,true)
    ];
  }

  ngOnInit()
  {
    this.empleado = new Empleado('Slave19',25,true);
  }

  ordenar()
  {
    for(var i=0;i<this.empleados.length;i++)
    {
      for(var j=0;j<this.empleados.length;j++)
      {
        if(this.empleados[i].nombre.charAt(0)<this.empleados[j].nombre.charAt(0))
        {
          var tmp = this.empleados[i];
          this.empleados[i] = this.empleados[j];
          this.empleados[j] = tmp;
        }
      }
    }
  }
}





