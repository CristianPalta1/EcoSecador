import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { CotizacionesRoutingModule } from './cotizaciones-routing.module';
import { PageHeaderModule } from '../../shared';
import { CotizacionesComponent } from './cotizaciones.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    imports: [CommonModule, CotizacionesRoutingModule, PageHeaderModule, FormsModule,  FontAwesomeModule],
    declarations: [CotizacionesComponent]
})
export class CotizacionesModule {}
