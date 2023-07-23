import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  item: any;
  title: string;
  author: string;
  publisher: string;
  bookLink: string;
  bookImg: string;
  outputList: HTMLElement;
  bookUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=';
  apiKey: string = 'llave de google academics'; // Replace with your actual API key
  placeHldr: string = '<img src="https://via.placeholder.com/150">';
  searchData: string;

  @ViewChild('listOutput', { static: true }) outputListRef: ElementRef;

  ngAfterViewInit() {
    this.outputList = this.outputListRef.nativeElement;
  }

  constructor(private http: HttpClient) {}

  onSearchClick() {
    this.outputListRef.nativeElement.innerHTML = '';
    document.body.style.backgroundImage = "url('')";
    this.searchData = (<HTMLInputElement>(
      document.getElementById('search-box')
    )).value;

    if (this.searchData === '' || this.searchData === null) {
      this.displayError();
    } else {
      this.http
        .get(`${this.bookUrl}${this.searchData}&${this.apiKey}`)
        .subscribe(
          (response: any) => {
            if (response.totalItems === 0) {
              alert('no result!.. try again');
            } else {
              this.displayResults(response);
            }
          },
          () => {
            alert('Something went wrong.. \nTry again!');
          }
        );
    }

    (<HTMLInputElement>document.getElementById('search-box')).value = ''; // Clear search box
  }

  displayResults(response: any) {
    response.items.forEach((element) => {
      this.item = element;
      if (this.item.volumeInfo && this.item.volumeInfo.industryIdentifiers) {
        this.title = this.item.volumeInfo.title;
        this.author = this.item.volumeInfo.authors;
        this.publisher = this.item.volumeInfo.publisher;
        this.bookLink = this.item.volumeInfo.previewLink;
        console.log();
        const bookIsbn =
          this.item.volumeInfo!.industryIdentifiers[0].identifier!;
        this.bookImg = this.item.volumeInfo.imageLinks
          ? this.item.volumeInfo.imageLinks.thumbnail
          : this.placeHldr;

        // const item2 = response.items[i + 1];
        // const title2 = item2.volumeInfo.title;
        // const author2 = item2.volumeInfo.authors;
        // const publisher2 = item2.volumeInfo.publisher;
        // const bookLink2 = item2.volumeInfo.previewLink;
        // const bookIsbn2 = item2.volumeInfo!.industryIdentifiers[0].identifier!;
        // const bookImg2 = item2.volumeInfo.imageLinks
        //   ? item2.volumeInfo.imageLinks.thumbnail
        //   : this.placeHldr;

        // in production code, item.text should have the HTML entities escaped.
        this.outputList.innerHTML +=
          '' +
          this.formatOutput(
            this.bookImg,
            this.title,
            this.author,
            this.publisher,
            this.bookLink,
            bookIsbn
          ) +
          // this.formatOutput(
          //   bookImg2,
          //   title2,
          //   author2,
          //   publisher2,
          //   bookLink2,
          //   bookIsbn2
          // ) +
          '';
      }
    });
  }

  formatOutput(
    bookImg: string,
    title: string,
    author: string,
    publisher: string,
    bookLink: string,
    bookIsbn: string
  ) {
    const viewUrl = 'app/library/viewer?isbn=' + bookIsbn; // constructing link for bookviewer
    return `<div class="col-lg-6">
      <div class="card" style="">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${bookImg}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">Author: ${author}</p>
              <p class="card-text">Publisher: ${publisher}</p>
              <a target="_blank" href="${viewUrl}" class="btn btn-secondary">Read Book</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  displayError() {
    alert('search term cannot be empty!');
  }
}
