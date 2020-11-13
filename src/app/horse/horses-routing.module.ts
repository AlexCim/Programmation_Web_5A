import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHorseComponent } from '@app/add-horse/add-horse.component';
import { HorsesComponent } from './horsesCom/horses.component';


const routes: Routes = [
    { path: '', component: HorsesComponent },
    { path: 'addHorse', component: AddHorseComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HorsesRoutingModule { }