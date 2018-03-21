import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PlayerComponent} from './player/player.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PlayerDetailComponent} from './player-detail/player-detail.component';
import {PlayerCreateComponent} from './player-create/player-create.component';
import {PlayerEditComponent} from './player-edit/player-edit.component';


const appRoutes: Routes = [
  {
    path: 'player',
    component: PlayerComponent,
    data: {title: 'Players'}
  },
  {
    path: 'player-create',
    component: PlayerCreateComponent,
    data: {title: 'Create Player'}
  },

  {
    path: 'player-detail/:id',
    component: PlayerDetailComponent,
    data: {title: 'Player details'}
  },

  {
    path: 'player-edit/:id',
    component: PlayerEditComponent,
    data: {title: 'Edit Player'}
  },

  {
    path: '',
    redirectTo: '/player',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailComponent,
    PlayerCreateComponent,
    PlayerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
