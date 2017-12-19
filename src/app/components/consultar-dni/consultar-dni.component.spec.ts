import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDniComponent } from './consultar-dni.component';

describe('ConsultarDniComponent', () => {
  let component: ConsultarDniComponent;
  let fixture: ComponentFixture<ConsultarDniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarDniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
