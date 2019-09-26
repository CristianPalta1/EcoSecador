import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';



const routes: Routes = [
    // { path: '', loadChildren: './layout/layout.module#LayoutModule'}, //canActivate: [AuthGuard] },
    { path: '', loadChildren: './inicio/inicio.module#InicioModule'},
    { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule'},
    { path: 'ecosecador', loadChildren: './ecosecador/ecosecador.module#EcoSecadorModule'},
    { path: 'layout', loadChildren: './layout/layout.module#LayoutModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', redirectTo: 'inicio'},
    // loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'inicio' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
