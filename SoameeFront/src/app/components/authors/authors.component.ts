import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author.interface';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  arrAuthors: Author[];

  constructor(private authorServices: AuthorService) {
    this.arrAuthors = [];
  }

  //inicializo todos los autores al cargar la ruta
  async ngOnInit() {
    const authors = await this.authorServices.getAllAuthors();
    this.arrAuthors = authors;
  }

}
