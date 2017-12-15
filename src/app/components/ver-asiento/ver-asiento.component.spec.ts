import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAsientoComponent } from './ver-asiento.component';

describe('VerAsientoComponent', () => {
  let component: VerAsientoComponent;
  let fixture: ComponentFixture<VerAsientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAsientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
