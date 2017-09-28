import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

import { Conversor } from './pipes/conversor.pipe';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { GetterComponent } from './getter/getter.component';
import { ContparentComponent } from './contparent/contparent.component';
import { ContchildComponent } from './contchild/contchild.component';
import { JqueryComponent } from './jquery/jquery.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootpageComponent } from './bootpage/bootpage.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './admin/components/main/main.component';
import { AddComponent } from './admin/components/add/add.component';
import { EditComponent } from './admin/components/edit/edit.component';
import { ListComponent } from './admin/components/list/list.component';

//MODULO DE ADMINISTRADOR
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    Conversor,
    CochesComponent,
    PlantillasComponent,
    GetterComponent,
    ContparentComponent,
    ContchildComponent,
    JqueryComponent,
    BootstrapComponent,
    BootpageComponent,
    FormularioComponent,
    LoginComponent,
    /*
    MainComponent,
    AddComponent,
    EditComponent,
    ListComponent
    */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    //IMPORT DE MODULO ADMINISTRADOR
    AdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
