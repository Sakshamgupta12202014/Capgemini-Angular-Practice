import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { pattern, required } from '@angular/forms/signals';


@Component({
  selector: 'app-reactive-forms',
  imports: [NgStyle, ReactiveFormsModule, NgClass],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  username = new FormControl('');
  password = new FormControl(null);

  onSubmit() {
    console.log(this.username);
    console.log(this.password);
  }

  logInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern("([a-z]{1,}[A-Z]{1,}[0-9]{1,}[^a-zA-Z0-9_]{1,}){8,}")])
  })

  getValue() {
    console.log(this.logInForm)
    console.log(this.logInForm.value);
  }


  registrationForm = new FormGroup(
    {
      first_name : new FormControl('ABC', [Validators.required, Validators.minLength(4)]),
      last_name :  new FormControl('XYZ', [Validators.required, Validators.minLength(4)]),
      phone_no :  new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[6-9]{1}[0-9]{9}")]),
      email :  new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{3,}[._0-9a-zA-Z]*@[a-zA-Z]{3,}\.[a-zA-Z]+$")]),
      gender :  new FormControl('', [Validators.required]),
      subject : new FormControl('', [Validators.required]),
      address :  new FormControl('', [Validators.required]),
      city :  new FormControl('', [Validators.required]),
      pincode :  new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      date : new FormControl('', [Validators.required]),
    }
  )

  getDetails() {
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);

    this.registrationForm.get('first_name')?.setValue("ABC");
    this.registrationForm.get("last_name")?.setValue("XYZ");
  }

  // using enable and disable property in form
  enableField() {
    this.registrationForm.get('subject')?.enable();
  }

  disableField() {
    this.registrationForm.get('subject')?.disable();
  }
}
