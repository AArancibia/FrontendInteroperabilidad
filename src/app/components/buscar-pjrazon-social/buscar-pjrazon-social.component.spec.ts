import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPJRazonSocialComponent } from './buscar-pjrazon-social.component';

describe('BuscarPJRazonSocialComponent', () => {
  let component: BuscarPJRazonSocialComponent;
  let fixture: ComponentFixture<BuscarPJRazonSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPJRazonSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPJRazonSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
