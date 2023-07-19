import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatbotModuleComponent } from './chatbot-module.component';
const routes: Routes = [
  {
    path: '',
    component: ChatbotModuleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatbotModuleRoutingModule {}
