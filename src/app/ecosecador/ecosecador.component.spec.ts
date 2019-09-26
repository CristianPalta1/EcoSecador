import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoSecadorComponent } from './ecosecador.component';

describe('EcoSecadorComponent', () => {
  let component: EcoSecadorComponent;
  let fixture: ComponentFixture<EcoSecadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoSecadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoSecadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
