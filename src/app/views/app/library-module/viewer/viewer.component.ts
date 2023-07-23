import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit {
  isbn: string;
  apiKey: string;
  libroEncontrado: any;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private googleBooksService: GoogleBooksService,
    private sanitizer: DomSanitizer
  ) {
    // Asigna tu apiKey aquí o recupérala de alguna fuente, como un formulario.
    this.apiKey = 'AIzaSyBqdknpWDf2HzFr3tqtGTOcdR2SRAQys2M';
  }

  ngOnInit() {
    // Obtener el ISBN desde el parámetro de consulta en la URL
    this.route.queryParamMap.subscribe((params) => {
      this.isbn = params.get('isbn');
      if (this.isbn) {
        this.buscarLibro();
      }
    });
  }

  buscarLibro() {
    this.googleBooksService
      .buscarLibroPorISBN(this.isbn, this.apiKey)
      .subscribe(
        (data: any) => {
          if (data.items && data.items.length > 0) {
            // Almacena los detalles del primer libro encontrado
            const url = data.items[0].accessInfo.webReaderLink;
            this.id = data.items[0].id;
            this.libroEncontrado =
              this.sanitizer.bypassSecurityTrustResourceUrl(
                `https://books.google.com.pe/books?id=${this.id}&lpg=PP1&dq=isbn%3A${this.isbn}&pg=PP1&output=embed`
              );
          } else {
            this.libroEncontrado = null;
          }
        },
        (error) => {
          console.error('Error al buscar el libro:', error);
          this.libroEncontrado = null;
        }
      );
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  buscarLibroPorISBN(isbn: string, apiKey: string) {
    const url = `${this.apiUrl}?q=isbn:${isbn}&key=${apiKey}`;
    return this.http.get(url);
  }
}
