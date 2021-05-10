import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  inputRequire = new FormControl('', [Validators.required])
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
