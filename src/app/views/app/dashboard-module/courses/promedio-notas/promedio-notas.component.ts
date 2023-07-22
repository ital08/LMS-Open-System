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

  series = [
    {
      name: 'Promedio de Notas',
      data: [7.5, 8.2, 6.9, 9.0, 8.5], // Datos falsos para el promedio de notas
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
