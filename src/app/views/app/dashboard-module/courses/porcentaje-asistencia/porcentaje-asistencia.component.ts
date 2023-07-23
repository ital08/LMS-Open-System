import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porcentaje-asistencia',
  templateUrl: './porcentaje-asistencia.component.html',
  styleUrls: ['./porcentaje-asistencia.component.scss'],
})
export class PorcentajeAsistenciaComponent implements OnInit {
  title = {
    text: 'Porcentaje de Asistencia',
    align: 'center',
  };

  chart = {
    type: 'donut',
    height: 350,
  };

  series = [85]; // Datos falsos para el porcentaje de asistencia

  constructor() {}

  ngOnInit(): void {}
}
