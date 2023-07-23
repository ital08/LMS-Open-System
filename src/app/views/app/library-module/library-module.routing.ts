import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryModuleComponent } from './library-module.component';
import { SearchComponent } from './search/search.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryModuleComponent,
     children: [
       { path: '', redirectTo: 'search', pathMatch: 'full' },
       { path: 'search', component: SearchComponent },
       { path: 'viewer', component: ViewerComponent },
     ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryModuleRoutingModule {}
