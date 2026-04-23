import { Component, signal } from '@angular/core';
import { Luxury } from './luxury/luxury';
import { Sedans } from './sedans/sedans';
import { Suvs } from './suvs/suvs';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [Luxury, Sedans, Suvs, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task01');
}
