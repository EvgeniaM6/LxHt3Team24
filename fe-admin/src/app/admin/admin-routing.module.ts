import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ChatComponent } from './chat/chat.component';
import { AppealsTableComponent } from './appeals-table/appeals-table.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appeals',
    component: AppealsTableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersTableComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
