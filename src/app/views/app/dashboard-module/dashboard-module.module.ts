import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModuleComponent } from './dashboard-module.component';
import { DashboardModuleRoutingModule } from './dashboard-module.routing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EvolucionNotasComponent } from './courses/evolucion-notas/evolucion-notas.component';
import { PromedioNotasComponent } from './courses/promedio-notas/promedio-notas.component';
import { PorcentajeActividadesComponent } from './courses/porcentaje-actividades/porcentaje-actividades.component';
import { PorcentajeAsistenciaComponent } from './courses/porcentaje-asistencia/porcentaje-asistencia.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashboardModuleComponent,
    EvolucionNotasComponent,
    CoursesComponent,
    StudentsComponent,
    PromedioNotasComponent,
    PorcentajeActividadesComponent,
    PorcentajeAsistenciaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardModuleRoutingModule,
    NgApexchartsModule,
  ],
})
export class DashboardModuleModule {}
