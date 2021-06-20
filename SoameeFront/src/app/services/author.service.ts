import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../interfaces/author.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api';
  }

  //Metodo llamar todos los autores - pagina de inicio *
  getAllAuthors(): Promise<Author[]> {
    return this.httpClient.get<Author[]>(`${this.baseUrl}/authors`).toPromise();
  }

  //metodo filtrar autor por id * 
  getByIdAuthor(id): Promise<Author> {
    return this.httpClient.get<Author>(`${this.baseUrl}/author/${id}`).toPromise();
  }

  //metodo crear un nuevo autor ** 
  createAuthor(newAuthor: Author) {
    return this.httpClient.post(`${this.baseUrl}/author`, newAuthor).toPromise();
  }


  //metodo actualizar datos de un autor ** NO IMPLANTADO - MISMA FORMA QUE CREATEAUTHOR
  updateAuthor(id, value) {
    return this.httpClient.put(`${this.baseUrl}/author/${id}`, value).toPromise();
  }

}
