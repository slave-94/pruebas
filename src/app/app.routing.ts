import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ContparentComponent } from './contparent/contparent.component';
import { JqueryComponent } from './jquery/jquery.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BootpageComponent } from './bootpage/bootpage.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes = [
    {path:'',component:HomeComponent},
    {path:'contacto',component:ContactoComponent,
        children:[{path:'coches',component:CochesComponent}]
    },
    {path:'contacto/:page',component:ContactoComponent},
    {path:'login',component:LoginComponent},
    {path:'fruta',component:FrutaComponent},
    {path:'empleado',component:EmpleadoComponent},
    {path:'coches',component:CochesComponent},
    {path:'plantillas',component:PlantillasComponent},
    {path: 'parent',component:ContparentComponent},
    {path: 'jquery',component:JqueryComponent},
    {path: 'bootstrap',component:BootstrapComponent},
    {path: 'bootpage' ,component:BootpageComponent},
    {path: 'formulario',component:FormularioComponent},
    {path:'**',component:HomeComponent}
];

export const appRoutingProviders:any[]=[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);