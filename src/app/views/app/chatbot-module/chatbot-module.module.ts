import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatbotModuleComponent } from './chatbot-module.component';
import { ChatbotModuleRoutingModule } from './chatbot-module.routing';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatbotModuleComponent],
  providers: [],
  imports: [CommonModule, ChatbotModuleRoutingModule, FormsModule ],
})
export class ChatbotModuleModule {}
