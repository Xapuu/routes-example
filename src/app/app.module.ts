import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guard/auth.guard'
import { LoggedGuardGuard } from './guard/logged-guard.guard'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { RosterRoutingModule } from './routes.config';
import { WrongTeamComponent } from './components/wrong-team/wrong-team.component';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { SuccessComponent } from './components/success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WrongTeamComponent,
    HomeLoggedComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    RosterRoutingModule
  ],
  providers: [AuthGuard,
    LoggedGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


