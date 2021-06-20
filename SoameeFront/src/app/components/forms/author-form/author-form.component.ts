import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  form: FormGroup;

  constructor(private authorServices: AuthorService, private router: Router) {
    this.form = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  //envio el formulario con los valores añadidos en los campos
  async onSubmit() {
    const newAuthor = await this.authorServices.createAuthor(this.form.value);
    if (newAuthor) {
      this.form.reset();
      this.router.navigate(['/books'])
    }

  }

}
