import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryModuleComponent } from './library-module.component';
import { LibraryModuleRoutingModule } from './library-module.routing';
import { SearchComponent } from './search/search.component';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [LibraryModuleComponent, SearchComponent, ViewerComponent],
  imports: [CommonModule, LibraryModuleRoutingModule],
})
export class LibraryModuleModule {}
