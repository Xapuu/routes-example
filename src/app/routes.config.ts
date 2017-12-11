import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard'
import { LoggedGuardGuard } from './guard/logged-guard.guard'
import { HomeComponent } from './components/home/home.component';
import { WrongTeamComponent } from './components/wrong-team/wrong-team.component'
import { HomeLoggedComponent } from './components/home-logged/home-logged.component'
import { SuccessComponent } from './components/success/success.component'
const appRoutes: Routes = [
    { pathMatch: 'full', canActivate: [LoggedGuardGuard], path: '', component: HomeComponent },
    { path: 'orangeteam', canActivate: [AuthGuard], loadChildren: './components/orange-team/orange-team.module#OrangeTeam' },
    { path: 'redteam', canActivate: [AuthGuard], loadChildren: './components/red-team/red-team.module#RedTeam' },
    { path: 'greenteam', canActivate: [AuthGuard], loadChildren: './components/green-team/green-team.module#GreenTeam' },
    { path: 'blueteam', canActivate: [AuthGuard], loadChildren: './components/blue-team/blue-team.module#BlueTeam' },
    { path: 'wrongteam', component: WrongTeamComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'logged', component: HomeLoggedComponent }
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})
export class RosterRoutingModule { }

