import { Component, OnInit } from '@angular/core';
import { cloneDeep, get } from 'lodash';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  alumnos: any[] = [
    {
      id: 0,
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
      id: 1,
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
      id: 2,
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
  series1 = [];
  series2 = [];
  chart = {
    type: 'line',
    height: 350,
  };

  selectedAlumno = 0;

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
    this.setGraph(0);
  }
  onAlumnoSelected($event): void {
    this.setGraph(this.selectedAlumno);
  }
  setGraph(index: number) {
    this.series1 = get(this.alumnos, `[${index}].notasActividades`);

    this.series2 = get(this.alumnos, `[${index}].evolucionNotas`);
  }
}
