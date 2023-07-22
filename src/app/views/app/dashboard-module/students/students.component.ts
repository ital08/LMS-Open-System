import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  alumnos: any[] = [
    {
      nombreCompleto: 'Juan Pérez',
      notasActividades: [
        {
          name: 'Notas de actividades',
          data: [15, 18, 17, 20, 12, 16, 19],
        },
      ],
      evolucionNotas: [
        {
          name: 'Notas de actividades',
          data: [13, 14, 14, 15, 16, 17, 18, 19, 20],
        },
      ],
    },
    {
      nombreCompleto: 'María Gómez',
      notasActividades: [
        {
          name: 'Notas de actividades',
          data: [12, 11, 12, 11, 10, 6, 4],
        },
      ],
      evolucionNotas: [
        {
          name: 'Notas de actividades',
          data: [12, 12, 13, 12, 11, 10, 9, 10, 7],
        },
      ],
    },
    {
      nombreCompleto: 'Luis Castro',
      notasActividades: [
        {
          name: 'Notas de actividades',
          data: [17, 18, 18, 20, 16, 17, 15],
        },
      ],
      evolucionNotas: [
        {
          name: 'Notas de actividades',
          data: [14, 17, 19, 18, 17, 16, 17, 20, 19],
        },
      ],
    },
    // Agrega más alumnos con datos ficticios similares para tener más ejemplos.
  ];

  chart = {
    type: 'line',
    height: 350,
  };

  selectedAlumno: any;

  title = {
    text: 'Notas de actividades y tareas',
    align: 'center',
  };

  chart1: any = {
    height: 350,
    type: 'bar',
  };

  title1 = {
    text: 'Evolución de notas',
    align: 'center',
  };
  dataLabels = {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758'],
    },
  };
  constructor() {}

  ngOnInit(): void {
    // Establecer un alumno predeterminado al cargar el componente.
    this.selectedAlumno = this.alumnos[0];
  }
}
