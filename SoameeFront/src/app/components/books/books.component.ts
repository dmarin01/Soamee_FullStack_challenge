import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  arrBooks: Book[];

  constructor(private bookService: BookService) { }

  //Inicializo todos los libros al  cargar la ruta
  async ngOnInit() {
    const books = await this.bookService.getAllBooks();
    console.log(books);

    this.arrBooks = books;
  }

}
