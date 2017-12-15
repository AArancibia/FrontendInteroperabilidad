import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTituralidadComponent } from './buscar-tituralidad.component';

describe('BuscarTituralidadComponent', () => {
  let component: BuscarTituralidadComponent;
  let fixture: ComponentFixture<BuscarTituralidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTituralidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTituralidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
