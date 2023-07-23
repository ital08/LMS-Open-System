import { TestBed } from '@angular/core/testing';

import { ChatbotModuleService } from './chatbot-module.service';

describe('ChatbotModuleService', () => {
  let service: ChatbotModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
