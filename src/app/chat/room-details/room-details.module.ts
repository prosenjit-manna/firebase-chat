import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RoomDetailsComponent } from './room-details.component';

const routes: Routes = [
  {
    path: ':id', component: RoomDetailsComponent
  }
];

@NgModule({
  declarations: [RoomDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoomDetailsModule { }
