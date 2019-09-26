import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { ServerErrorRoutingModule } from './server-error-routing.module';
import { ServerErrorComponent } from './server-error.component';

@NgModule({
  imports: [
    CommonModule,
    ServerErrorRoutingModule
  ],
  declarations: [ServerErrorComponent]
})
export class ServerErrorModule { }
