import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreenTeamComponent } from './green-team.component';

const routes: Routes = [
    { path: '', component: GreenTeamComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GreenTeamRouting { }

