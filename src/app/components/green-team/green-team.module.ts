
import { NgModule } from '@angular/core';
import { GreenTeamRouting } from './green-team.routing.module';
import { GreenTeamComponent } from './green-team.component';

@NgModule({
    imports: [
        GreenTeamRouting
    ],
    declarations: [GreenTeamComponent],
    exports: []
})
export class GreenTeam { }
