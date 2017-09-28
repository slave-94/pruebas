import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//declare var jQuery: any;
//declare var $: any;

@Component({
  selector: 'contchild',
  templateUrl: './contchild.component.html',
  styleUrls: ['./contchild.component.css']
})
export class ContchildComponent implements OnInit {

  value: string;

  @Output() sender = new EventEmitter();
  @Input() enviado: string;

  constructor() {
    this.value = 'Hi parent';
  }

  ngOnInit() {
  }

  sendData() {
    this.sender.emit({
      'value': this.value
    });
    //$("#toggeable").slideToggle();
  }

}
