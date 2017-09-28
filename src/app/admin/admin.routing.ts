import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../services/admin.guard';

//COMPONENTES
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';


const adminRoutes: Routes = [
    {
        path:'admin-main',
        component:MainComponent,
        //PROTECCION DE RUTAS
        canActivate:[AdminGuard],
        children:[
            {path:'agregar',component:AddComponent},
            {path:'editar',component:EditComponent},
            {path:'lista',component:ListComponent}
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(adminRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AdminRouting
{
    
}