
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { BlueTeamComponent } from './blue-team.component'

const routes: Routes = [
    { path: '', component: BlueTeamComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlueTeamRouting { }