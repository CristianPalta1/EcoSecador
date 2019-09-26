import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ReporteComponent } from './reporte.component';
import { ReporteModule } from './reporte.module';


describe('ReportesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReporteModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ReporteComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
