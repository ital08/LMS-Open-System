import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioNotasComponent } from './promedio-notas.component';

describe('PromedioNotasComponent', () => {
  let component: PromedioNotasComponent;
  let fixture: ComponentFixture<PromedioNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromedioNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromedioNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
