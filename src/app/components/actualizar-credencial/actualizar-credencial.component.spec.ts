import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCredencialComponent } from './actualizar-credencial.component';

describe('ActualizarCredencialComponent', () => {
  let component: ActualizarCredencialComponent;
  let fixture: ComponentFixture<ActualizarCredencialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarCredencialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCredencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
