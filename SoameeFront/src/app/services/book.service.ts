import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api';
  }

  //Metodo llamar todos los libros *
  getAllBooks(): Promise<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}/books`).toPromise();
  }

  //metodo filtrar un libro por id *
  getByIdBook(id): Promise<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/book/${id}`).toPromise();
  }

  //metodo crear un nuevo libro
  createBook(newBook: Book) {
    return this.httpClient.post(`${this.baseUrl}/book`, newBook).toPromise();
  }


  //metodo actualizar datos de un libro
  updateBook(id, value) {
    return this.httpClient.put(`${this.baseUrl}/book/${id}`, value).toPromise();
  }

}
