import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotModuleComponent } from './chatbot-module.component';

describe('ChatbotModuleComponent', () => {
  let component: ChatbotModuleComponent;
  let fixture: ComponentFixture<ChatbotModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
