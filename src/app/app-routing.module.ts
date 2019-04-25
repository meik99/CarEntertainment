import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MusicComponent} from './music/music.component';
import {CarComponent} from './car/car.component';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent
  },
  {
    path: 'car',
    component: CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
