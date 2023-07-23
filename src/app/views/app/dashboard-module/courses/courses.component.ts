import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // Variable para los datos del gráfico
  // Opciones de configuración del gráfico
  title = {
    text: 'Porcentaje de Asistencia',
    align: 'center',
  };

  constructor() {}
  series = [
    {
      name: 'Asistencia',
      data: [100, 95, 90, 90, 87, 90, 90, 87, 80, 87, 80, 75],
    },
  ];
  categories = [
    'S1', // Primera Práctica Calificada
    'S2', // Segunda Práctica Calificada
    'S3', // Tercera Práctica Calificada
    'S4', // Cuarta Práctica Calificada
    'S5', // Examen Parcial
    'S6',
    'S7', // Examen Sustitutorio
    'S8', // Examen Sustitutorio
    'S9', // Examen Sustitutorio
    'S10', // Examen Sustitutorio
    'S11', // Examen Sustitutorio
    'S12', // Examen Sustitutorio
    'S13', // Examen Sustitutorio
    'S14', // Examen Sustitutorio
    'S15', // Examen Sustitutorio
    'S16', // Examen Sustitutorio
  ];
  chart = {
    type: 'bar',
  };
  ngOnInit(): void {}
}
