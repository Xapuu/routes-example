import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedTeamComponent } from './red-team.component';

const routes: Routes = [
    { path: '', component: RedTeamComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RedTeamRouting { }
