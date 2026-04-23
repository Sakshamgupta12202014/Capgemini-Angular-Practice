import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
// import { NgStyle } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-template-drivenforms',
  imports: [FormsModule, NgStyle],
  templateUrl: './template-drivenforms.html',
  styleUrl: './template-drivenforms.css',
})
export class TemplateDrivenforms {
  handleSubmit(form: NgForm) {
    console.log(form);
    // to see the data stored in the form
    console.log(form.value);

    console.log("Pristine "+ form.pristine)
    console.log("dirty "+ form.dirty)
    console.log("touched "+ form.touched)
    console.log("Untouched "+ form.untouched)
    console.log("isValid:  "+ form.valid)
    console.log("is Invalid "+ form.invalid)
    console.log("errors: " + form.errors); // overall form error not the specific filed errors
  }

  username:string = '';
  password:string = '';
  email!:string;
  printCred() {
    console.log(this.username)
    console.log(this.password);
  }

}
