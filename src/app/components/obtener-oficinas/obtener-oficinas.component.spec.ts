import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerOficinasComponent } from './obtener-oficinas.component';

describe('ObtenerOficinasComponent', () => {
  let component: ObtenerOficinasComponent;
  let fixture: ComponentFixture<ObtenerOficinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerOficinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerOficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
