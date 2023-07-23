import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio-notas',
  templateUrl: './promedio-notas.component.html',
  styleUrls: ['./promedio-notas.component.scss'],
})
export class PromedioNotasComponent implements OnInit {
  title = {
    text: 'Promedio de Notas',
    align: 'center',
  };

  chart = {
    type: 'bar',
    height: 350,
  };
  categories = [
    'PC1', // Primera Práctica Calificada
    'PC2', // Segunda Práctica Calificada
    'PC3', // Tercera Práctica Calificada
    'PC4', // Cuarta Práctica Calificada
    'Parcial', // Examen Parcial
    'Examen Final',
    'Sustitutorio', // Examen Sustitutorio
  ];
  series = [
    {
      name: 'Promedio de Notas',
      data: [10.5, 11.2, 12.9, 13.0, 10.5, 13.0, 0], // Datos falsos para el promedio de notas
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
