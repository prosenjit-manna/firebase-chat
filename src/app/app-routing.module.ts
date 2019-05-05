import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'chat', loadChildren: './chat/chat.module#ChatModule'
  },
  {
    path: 'auth', loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**', loadChildren: './not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
