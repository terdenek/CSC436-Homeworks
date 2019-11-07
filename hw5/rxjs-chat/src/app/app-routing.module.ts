import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
    { path: '', component: ChatPageComponent, canActivate:[AuthGuardService] },
    { path: 'login', component: LoginPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }