import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModuleComponent } from './dashboard-module.component';
import { DashboardModuleRoutingModule } from './dashboard-module.routing';

@NgModule({
  declarations: [DashboardModuleComponent],
  imports: [CommonModule, DashboardModuleRoutingModule],
})
export class DashboardModuleModule {}
