import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleRpvComponent } from './ver-detalle-rpv.component';

describe('VerDetalleRpvComponent', () => {
  let component: VerDetalleRpvComponent;
  let fixture: ComponentFixture<VerDetalleRpvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetalleRpvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetalleRpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
