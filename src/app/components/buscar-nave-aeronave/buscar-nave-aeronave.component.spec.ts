import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarNaveAeronaveComponent } from './buscar-nave-aeronave.component';

describe('BuscarNaveAeronaveComponent', () => {
  let component: BuscarNaveAeronaveComponent;
  let fixture: ComponentFixture<BuscarNaveAeronaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarNaveAeronaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarNaveAeronaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
