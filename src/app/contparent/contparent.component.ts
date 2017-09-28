import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contparent',
  templateUrl: './contparent.component.html',
  styleUrls: ['./contparent.component.css']
})
export class ContparentComponent implements OnInit {

  value:string;
  toChild:string;

  constructor() { 
    this.toChild = 'Hi child';
  }

  ngOnInit() {
  }

  setData(event)
  {
    this.value = event.value;    
  }

}
