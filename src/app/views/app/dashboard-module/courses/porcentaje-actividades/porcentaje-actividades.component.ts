import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porcentaje-actividades',
  templateUrl: './porcentaje-actividades.component.html',
  styleUrls: ['./porcentaje-actividades.component.scss'],
})
export class PorcentajeActividadesComponent implements OnInit {
  title = {
    text: 'Porcentaje de Alumnos que Realizaron Actividades y Tareas',
    align: 'center',
  };

  chart = {
    type: 'pie',
    height: 350,
  };

  series = [25, 75]; // Datos falsos para el porcentaje de alumnos que realizaron actividades y tareas

  constructor() {}

  ngOnInit(): void {}
}
