
import { NgModule } from '@angular/core';
import { OrangeTeamRouting } from './orange-team.routing.module';
import { OrangeTeamComponent } from './orange-team.component';

@NgModule({
    imports: [
        OrangeTeamRouting
    ],
    declarations: [OrangeTeamComponent],
    exports: []
})
export class OrangeTeam { }
