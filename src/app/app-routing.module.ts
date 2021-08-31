import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { LoginComponent } from './home/login/login.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { BlogComponent } from './home/blog/blog.component';
import { AboutComponent } from './home/about/about.component';
import { AuthGuard } from './auth_guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignUpComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],

  },

  {
    path: 'blog',
    component: BlogComponent,
  },

{
  path: 'about',
  component: AboutComponent,
},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,SignUpComponent ]
