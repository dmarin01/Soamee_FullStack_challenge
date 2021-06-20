import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from 'src/app/interfaces/author.interface';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  form: FormGroup;
  arrAuthors: Author[];

  constructor(private bookServices: BookService, private authorService: AuthorService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl(),
      isbn: new FormControl(),
      fk_author: new FormControl()
    })
  }

  async ngOnInit() {
    this.arrAuthors = await this.authorService.getAllAuthors();


  }

  async onSubmit() {
    const newBook = await this.bookServices.createBook(this.form.value);
    if (newBook) {
      this.form.reset();
      this.router.navigate(['/authors'])
    }

  }

  async onChange($event) {
    return $event.target.value;
  }

}
