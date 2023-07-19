import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryModuleComponent } from './library-module.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryModuleComponent,
    // children: [
    //   { path: '', redirectTo: 'courses', pathMatch: 'full' },
    //   { path: 'courses', component: CoursesComponent },
    //   { path: 'students', component: StudentsComponent },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryModuleRoutingModule {}
