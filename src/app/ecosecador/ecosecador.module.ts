import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { EcoSecadorRoutingModule } from './ecosecador-routing.module';
import { EcoSecadorComponent } from './ecosecador.component';
import { StatModule } from '../shared';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

library.add(faCoffee);

@NgModule({
    imports: [
        CommonModule,
        EcoSecadorRoutingModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StatModule,
        FormsModule,
        FontAwesomeModule
    ],
    declarations: [EcoSecadorComponent]
})
export class EcoSecadorModule {}
