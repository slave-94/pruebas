import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRouting } from './admin.routing';

//COMPONENTES
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

import { AdminGuard } from '../services/admin.guard';

@NgModule({
    declarations: [
        MainComponent,
        AddComponent,
        EditComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRouting
    ],
    exports: [
        MainComponent,
        AddComponent,
        EditComponent,
        ListComponent
    ],
    providers: [AdminGuard]
})

export class AdminModule
{

}

