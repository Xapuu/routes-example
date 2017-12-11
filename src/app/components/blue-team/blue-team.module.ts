import { NgModule } from '@angular/core'

import { BlueTeamRouting } from './blue-team.routing'
import { BlueTeamComponent } from './blue-team.component'

@NgModule({
    imports: [BlueTeamRouting],
    declarations: [BlueTeamComponent],
    exports: []

})
export class BlueTeam { }