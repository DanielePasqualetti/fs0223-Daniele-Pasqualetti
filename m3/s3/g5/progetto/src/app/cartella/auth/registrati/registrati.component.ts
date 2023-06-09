import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.scss'],
})
export class RegistratiComponent implements OnInit {
  repeatPass: string = 'none';
  constructor() {}
  ngOnInit(): void {}

  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    gender: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    rpwd: new FormControl(''),
  });

  registerSubmited() {
    if (this.PWD.value == this.RPWD.value) {
      console.log(this.registerForm.valid);
      this.repeatPass = 'none';
    } else {
      this.repeatPass = 'inline';
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as unknown as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get('lastname') as unknown as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as unknown as FormControl;
  }
  get Mobile(): FormControl {
    return this.registerForm.get('mobile') as unknown as FormControl;
  }
  get Gender(): FormControl {
    return this.registerForm.get('gender') as unknown as FormControl;
  }
  get PWD(): FormControl {
    return this.registerForm.get('pwd') as unknown as FormControl;
  }
  get RPWD(): FormControl {
    return this.registerForm.get('rpwd') as unknown as FormControl;
  }
}
