import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RoomListComponent } from './room-list.component';


const routes: Routes = [
  {
    path: '', component: RoomListComponent
  }
];

@NgModule({
  declarations: [RoomListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoomListModule { }
