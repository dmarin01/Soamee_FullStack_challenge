import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AuthorsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'author/:id', component: AuthorComponent },
  { path: '**', redirectTo: '/authors' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
