import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'getter',
  templateUrl: './getter.component.html',
  styleUrls: ['./getter.component.css']
})
export class GetterComponent implements OnInit {

  @Input() valor:string;
  @Output() valores = new EventEmitter();

  nombre:string;
  folio:number;

  constructor() {
    this.nombre = 'algo';
    this.folio = 19;  
   }

  ngOnInit() {
  }

  emitirEvento()
  {
    this.valores.emit({
      'nombre':this.nombre,
      'folio':this.folio
    });
  }

}
