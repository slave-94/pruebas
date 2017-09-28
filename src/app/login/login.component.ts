import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Router } from '@angular/router';
import { AdminGuard } from '../services/admin.guard';

//MODELO
import { Datos } from './datos';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PeticionesService]
})
export class LoginComponent implements OnInit {

  public datos: Datos;

  public datosOk: boolean;
  public nombre: string;
  public email: string;
  public pass: string;

  public sesion_valida: boolean;
  public sesion_activa: boolean;
  public role: string;

  public datosUser;

  constructor(
    private peticiones: PeticionesService,
    private router: Router,
    private adminGuard: AdminGuard
  ) {

    /*
    //MODELO
    console.log('---USO DE MODELO---');
    var car;
    if(localStorage.getItem('car')==null)
    {
      car = new Coche('Delorian','19','negro');
      localStorage.setItem('car',JSON.stringify(car));
    }
    else{
      car = JSON.parse(localStorage.getItem('car'));
      console.log(car.color);
    }
    */

    let admin = localStorage.getItem('role');
    if (admin == 'ROLE_ADMIN')
    {
      this.adminGuard.setAdmin(true);
      this.role = 'ROLE_ADMIN';
    }



    //localStorage.clear();
    this.sesion_valida = true;

    console.log('RETURN OF LOCALSTORAGE:' + localStorage.getItem('id'));
    console.log('PARSING LOCALSTORAGE:' + JSON.parse(localStorage.getItem('id')));

    let datosLocalStorage = JSON.parse(localStorage.getItem('id'));//this.peticiones.getId();

    if (datosLocalStorage != null) {
      this.datos = datosLocalStorage;
      this.sesion_activa = true;
      this.nombre = this.datos.name;
      this.email = this.datos.email;
    }

    else {
      this.sesion_activa = false;
      this.datos = new Datos('', '', '');
    }

  }

  ngOnInit() {
    //console.log(this.peticiones.getId());
    console.log('TOKEN: ' + this.peticiones.getToken());
  }

  login() {

    /*
    var data = {
      'email': this.email,
      'password': this.pass
    };
    */
    this.datos.email = this.email;
    this.datos.name = this.nombre;
    this.datos.password = this.pass;

    this.peticiones.login(this.datos).subscribe(
      res => {
        if (res) {
          //LOGIN CORRECTO
          this.datosOk = true;
          this.datosUser = res.issetUser;
          this.role = this.datosUser.role;
          console.log('ROLE->' + this.role);
          localStorage.setItem('role', this.role);
          if (this.role == 'ROLE_ADMIN')
            this.adminGuard.setAdmin(true);
          //POR NO HACER MODELO
          /*
          var datos = {
            'name':this.datosUser.name,
            'email':this.datosUser.email,
          };
          */
          //DEBERIA HACERLO
          localStorage.setItem('id', JSON.stringify(this.datos));
          console.log('OBJ: ' + localStorage.getItem('id'));
          this.sesion_valida = true;
          this.datosUser.password = '';
          //OBTENCION DE TOKEN
          this.peticiones.login(this.datos).subscribe(
            res => {
              if (res) {
                this.peticiones.login(this.datos, 'true').subscribe(
                  res => {
                    if (res) {
                      if (res.token.length <= 0)
                        console.log('No se generó token');
                      else {
                        localStorage.setItem('token', res.token);
                        console.log(res.token);
                      }

                    }
                    else {
                      console.log(res);
                      //document.getElementById("err").innerHTML += "email y/o pass incorrecto";
                      this.sesion_valida = false;
                      console.log("email y/o pass incorrecto");
                    }
                  },
                  //LOGIN INCORRECTO
                  err => {
                    console.log(<any>err);
                    //document.getElementById("err").innerHTML = "<div>email y/o pass incorrecto</div>";
                    this.sesion_valida = false;
                    console.log("email y/o pass incorrecto");
                  }
                );
              }
              else {
                console.log(res);
                //document.getElementById("err").innerHTML += "email y/o pass incorrecto";
                this.sesion_valida = false;
                console.log("email y/o pass incorrecto");
              }
            },
            //LOGIN INCORRECTO
            err => {
              console.log(<any>err);
              //document.getElementById("err").innerHTML = "<div>email y/o pass incorrecto</div>";
              this.sesion_valida = false;
              console.log("email y/o pass incorrecto");
            }
          );
        }
        else {
          console.log(res);
          //document.getElementById("err").innerHTML += "email y/o pass incorrecto";
          this.sesion_valida = false;
          console.log("email y/o pass incorrecto");
        }
      },
      err => {
        console.log(<any>err);
        //document.getElementById("err").innerHTML = "<div>email y/o pass incorrecto</div>";
        this.sesion_valida = false;
        console.log("email y/o pass incorrecto");
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  /*
  login() {
    
    //SE CREA JSON CON LOS DATOS QUE REQUIERE
    var data = {
      'email': this.email,
      'password': this.pass
    };
    //LLAMA AL SERVICIO PARA INSERTAR DATOS JSON
    this.peticiones.login(data).subscribe(
      res => {
        if (res) {
          this.datosOk = true;
          this.datosUser = res.issetUser;
          this.role = this.datosUser.role;
          console.log(res.issetUser);//token
          this.sesion_valida = true;
        }
        else {
          console.log(res);
          //document.getElementById("err").innerHTML += "email y/o pass incorrecto";
          this.sesion_valida = false;
          console.log("email y/o pass incorrecto");
        }
      },
      err => {
        console.log(<any>err);
        //document.getElementById("err").innerHTML = "<div>email y/o pass incorrecto</div>";
        this.sesion_valida = false;
        console.log("email y/o pass incorrecto");
      }
    );
    
    this.getToken();

  }

  //GET TOKEN
  getToken() {
    //SE CREA JSON CON LOS DATOS QUE REQUIERE
    var data = {
      'email': this.email,
      'password': this.pass,
      'gettoken':'true'
    };
    //LLAMA AL SERVICIO PARA INSERTAR DATOS JSON
    this.peticiones.login(data).subscribe(
      res => {
        if (res) {
          this.datosOk = true;
          //this.datosUser = res.token;
          console.log(res.token);//token
          this.sesion_valida = true;
        }
        else {
          console.log(res);
          //document.getElementById("err").innerHTML += "email y/o pass incorrecto";
          this.sesion_valida = false;
          console.log("email y/o pass incorrecto");
        }
      },
      err => {
        console.log(<any>err);
        //document.getElementById("err").innerHTML = "<div>email y/o pass incorrecto</div>";
        this.sesion_valida = false;
        console.log("email y/o pass incorrecto");
      }
    )
  }
  */

}
