import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    //var opc = $("#opciones option:selected").text();

    var opc = $("#opciones option:selected").val();

    //console.log(opc);

    switch (opc) {
      case "aumento":
        $("#txt").attr("size", "50");
        break;
      case "toggle":
        $("#txt").slideToggle(1000);
        break;
      case "estilo":
        $("#txt").css({ "background-color": "lime", "color": "#0099CC" });
        break;
      case "agregar":
        $("#txt").append(" texto agreagado");
        break;
      case "cargar":
      $.get("https://jsonplaceholder.typicode.com/comments",function(res){
        res.forEach(function(reg,index)
        {
          $("#datos").append("<li>"+reg.name+"<li>");
        });
      },"json");
      break;
    }

  }

}
