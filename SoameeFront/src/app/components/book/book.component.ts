import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  @Input() book: Book;


  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  //recogo el id a través de router link desde books.component
  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const idBook = params.id;
      this.book = await this.bookService.getByIdBook(idBook)
    })
  }
}

