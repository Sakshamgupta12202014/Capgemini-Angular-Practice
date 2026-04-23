import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Parent } from './parent/parent';
import { Forms } from './forms/forms';
import { DataService } from "./data-service/data-service";
import { TemplateReference } from './template-reference/template-reference';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template : `
      <h1>This is my first Angular Project , This template is written inside the app.ts file</h1>
    `,
  styles : `
      h1 {
        color: white;
      }
    `,
    imports: [Home, Navbar, Footer, Parent, Forms, DataService, TemplateReference]

})
export class App {
  // protected readonly title = signal('Angular_project');
}
