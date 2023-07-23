import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeActividadesComponent } from './porcentaje-actividades.component';

describe('PorcentajeActividadesComponent', () => {
  let component: PorcentajeActividadesComponent;
  let fixture: ComponentFixture<PorcentajeActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcentajeActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
