import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PageHeaderModule } from '../../shared';
import { PersonalComponent } from './personal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PersonalRoutingModule,
        FormsModule,
        PageHeaderModule
    ],
    declarations: [PersonalComponent]
})
export class PersonalModule {}
