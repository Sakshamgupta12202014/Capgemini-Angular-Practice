import { Component, inject } from '@angular/core';
import { Count } from '../service/count';
import { User } from '../service/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data-service',
  imports: [JsonPipe],
  templateUrl: './data-service.html',
  styleUrl: './data-service.css',
})
export class DataService {
  // this is constructor injection
  constructor(public counter:Count) {}

  

  // This is function injection
  userData = inject(User);
}
