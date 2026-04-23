import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-template-reference',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-reference.html',
  styleUrl: './template-reference.css',
})
export class TemplateReference {
  greet(name: string) {
    console.log("Hello " + name);
  }

  @ViewChild('emailInput') emailField!: ElementRef;
  focusInput() {
    this.emailField.nativeElement.focus();
  }

  email:string = '';
}
