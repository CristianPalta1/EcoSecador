import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { PageHeaderModule } from '../../shared';
import { ReporteComponent } from './reporte.component';


@NgModule({
    imports: [CommonModule, ReporteRoutingModule, PageHeaderModule],
    declarations: [ReporteComponent]
})
export class ReporteModule {}
