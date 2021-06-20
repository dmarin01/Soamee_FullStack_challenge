import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/interfaces/author.interface';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() author: Author;

  constructor(private authorService: AuthorService, private activatedRoute: ActivatedRoute) { }

  //inicializo el autor por id en ruta
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const routeID = params.id;

      this.author = await this.authorService.getByIdAuthor(routeID)
    })

  }

}
