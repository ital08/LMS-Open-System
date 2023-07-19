import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryModuleComponent } from './library-module.component';
import { LibraryModuleRoutingModule } from './library-module.routing';

@NgModule({
  declarations: [LibraryModuleComponent],
  imports: [CommonModule, LibraryModuleRoutingModule],
})
export class LibraryModuleModule {}
