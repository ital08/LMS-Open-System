import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeAsistenciaComponent } from './porcentaje-asistencia.component';

describe('PorcentajeAsistenciaComponent', () => {
  let component: PorcentajeAsistenciaComponent;
  let fixture: ComponentFixture<PorcentajeAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcentajeAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
