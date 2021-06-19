import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    BooksComponent,
    BookComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
