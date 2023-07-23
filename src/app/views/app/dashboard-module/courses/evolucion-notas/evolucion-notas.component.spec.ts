import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionNotasComponent } from './evolucion-notas.component';

describe('EvolucionNotasComponent', () => {
  let component: EvolucionNotasComponent;
  let fixture: ComponentFixture<EvolucionNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucionNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucionNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
