
import { NgModule } from '@angular/core';
import { RedTeamRouting } from './red-team.routing.module';
import { RedTeamComponent } from './red-team.component';

@NgModule({
    imports: [
        RedTeamRouting
    ],
    declarations: [RedTeamComponent],
    exports: []
})
export class RedTeam { }
