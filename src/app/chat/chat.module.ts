import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';

const routes: Routes = [
  {
    path: '', component: ChatComponent,
    children: [
      {
        path: 'rooms', loadChildren: './room-list/room-list.module#RoomListModule'
      },
      {
        path: 'room', loadChildren: './room-details/room-details.module#RoomDetailsModule'
      }
    ]
  },
];

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
