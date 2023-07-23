import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModuleComponent } from './dashboard-module.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardModuleComponent,

    children: [
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CoursesComponent },
      { path: 'students', component: StudentsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModuleRoutingModule {}
