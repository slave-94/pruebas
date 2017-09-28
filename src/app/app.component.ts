import { Component,OnInit,DoCheck,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{

  name: string;
  collection: string[];
  @Input() txt:string;

  ngOnInit()
  {

  }

  ngDoCheck()
  {
    //OBTENER DATOS DE LOCALSTORAGE
  }

  title = 'Prácticas Angular 4';
}
