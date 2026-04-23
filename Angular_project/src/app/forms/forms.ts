import { Component } from '@angular/core';
import { TemplateDrivenforms } from './template-drivenforms/template-drivenforms';
import { ReactiveForms } from './reactive-forms/reactive-forms';

@Component({
  selector: 'app-forms',
  imports: [TemplateDrivenforms, ReactiveForms],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
    handleSelection(selection : any) {
    console.log(selection + " , " + selection.value);
  }

  printValue(val: string) {
  console.log(val);
}
}
