import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path : '', redirectTo:'/dashboard', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
