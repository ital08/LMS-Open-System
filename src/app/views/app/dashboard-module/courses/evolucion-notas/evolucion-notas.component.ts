import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evolucion-notas',
  templateUrl: './evolucion-notas.component.html',
  styleUrls: ['./evolucion-notas.component.scss'],
})
export class EvolucionNotasComponent implements OnInit {
  title = {
    text: 'Evolución de Notas',
    align: 'center',
  };

  chart = {
    type: 'line',
    height: 350,
  };

  series = [
    {
      name: 'Notas',
      data: [7.0, 7.5, 8.2, 6.9, 9.0, 8.5], // Aquí deberías proporcionar los datos reales de la evolución de notas
    },
  ];

  xaxis = {
    categories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'], // Aquí deberías proporcionar las categorías de las notas
  };
  constructor() {}

  ngOnInit(): void {}
}
