import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CotizacionesComponent } from './cotizaciones.component';
import { CotizacionesModule } from './cotizaciones.module';


describe('CotizacionesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  CotizacionesModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CotizacionesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
