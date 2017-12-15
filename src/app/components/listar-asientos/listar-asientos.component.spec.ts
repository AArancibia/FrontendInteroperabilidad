import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAsientosComponent } from './listar-asientos.component';

describe('ListarAsientosComponent', () => {
  let component: ListarAsientosComponent;
  let fixture: ComponentFixture<ListarAsientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAsientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
