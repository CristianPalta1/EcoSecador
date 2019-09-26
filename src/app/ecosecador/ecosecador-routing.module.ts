import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcoSecadorComponent } from './ecosecador.component';

const routes: Routes = [
    {
        path: '',
        component: EcoSecadorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcoSecadorRoutingModule {}
