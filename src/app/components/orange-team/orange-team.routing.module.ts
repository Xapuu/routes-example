import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrangeTeamComponent } from './orange-team.component';

const routes: Routes = [
    { path: '', component: OrangeTeamComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrangeTeamRouting { }
