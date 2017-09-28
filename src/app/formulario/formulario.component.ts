import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [PeticionesService]
})
export class FormularioComponent implements OnInit {

  public users;

  public errmsg: string;
  public nombre: string;
  public email: string;
  public pass: string;
  public pass_conf: string;
  public fecha: string;

  public nombre_valido: boolean;
  public email_valido: boolean;
  public pass_valido: boolean;
  public pass_conf_valido: boolean;
  public fecha_valido: boolean;

  public success: boolean;

  constructor(
    private peticiones: PeticionesService
  ) {
    this.nombre = '';
    this.email = '';
    this.pass = '';
    this.fecha = '';
    this.nombre_valido = this.email_valido = this.pass_valido = this.pass_conf_valido = this.fecha_valido = true;

    //FECHA
    /*
    $('#sandbox-container input').datepicker({
      format: "dd/mm/yyyy",
      startDate: new Date("1900/01/01"),
      endDate: new Date("2100/01/01")
    });
    */

  }

  ngOnInit() {
    this.peticiones.getUsers().subscribe(
      result => {
        console.log(result);
        this.users = result.data;
      }, error => {
        var error = <any>error;
        console.log(error);
      });
  }

  onSubmit() {
    var nulos = this.verificarNulos();
    var patterns = this.verificarPatterns();

    if (!nulos && patterns) {
      //SE CREA JSON CON LOS DATOS DEL FORMULARIO
      var data = {
        'name': this.nombre,
        'surname': 'generico',
        'email': this.email,
        'password': this.pass
      };
      //LLAMA AL SERVICIO PARA INSERTAR DATOS JSON
      this.peticiones.insertUser(data).subscribe(
        res => {
          if (res.code == 200) {
            //this.router.navigate(['/']);
          }
          else {
            console.log(res);
          }
        },
        err => {
          console.log(<any>err);
        }
      );
      //VACIAR CAMPOS
      this.nombre = this.email = this.pass = this.pass_conf = "";
      this.success = true;

    }


    /*
    if(nulos)
    this.errmsg = "Llenar todos los campos"
    */

  }

  verificarNulos() {
    if (!this.nombre || !this.email || !this.pass || !this.pass_conf || !this.fecha)
      return true;
    else
      return false;
    /*
    this.nombre_valido = false;
    if(!this.nombre)
    this.email_valido = false;
    if(!this.nombre)
    this.pass_valido = false;
    if(!this.fecha)
    this.nombre_valido = false;
    */
  }

  verificarPatterns() {
    //NO NNUMEROS NI CARACTERES
    var patt_nombre = new RegExp("^[a-zA-Z]+$");
    if (!patt_nombre.test(this.nombre))
      this.nombre_valido = false;
    //E-MAIL
    var patt_email = new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if (!patt_email.test(this.email))
      this.email_valido = false;
    //PASSWORD
    if (this.pass.length < 6)
      this.pass_valido = false;
    //CONFIRMAR PASSWORD
    if (this.pass_conf != this.pass)
      this.pass_conf_valido = false;
    //FECHA
    let fecha_input = this.fecha.split("-");
    let anio = parseInt(fecha_input[0]);
    if (anio < 1900 || anio > 2100)
      this.fecha_valido = false;

    return this.nombre_valido && this.email_valido && this.pass_valido && this.pass_conf_valido && this.fecha_valido;

  }

}
