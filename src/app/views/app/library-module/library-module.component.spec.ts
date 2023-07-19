import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryModuleComponent } from './library-module.component';

describe('LibraryModuleComponent', () => {
  let component: LibraryModuleComponent;
  let fixture: ComponentFixture<LibraryModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
