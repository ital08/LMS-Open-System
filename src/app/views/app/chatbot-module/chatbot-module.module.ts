import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatbotModuleComponent } from './chatbot-module.component';
import { ChatbotModuleRoutingModule } from './chatbot-module.routing';

@NgModule({
  declarations: [ChatbotModuleComponent],
  imports: [CommonModule, ChatbotModuleRoutingModule],
})
export class ChatbotModuleModule {}
