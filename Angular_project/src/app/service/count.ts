import { Parent } from './../parent/parent';
import { Injectable } from '@angular/core';

// root means I can use this service anywhere in the app
@Injectable({
  providedIn: 'root',  // we can share this service with our whole application
})
export class Count {
  count : number = 0;
  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

// write logic and use it anywhere in the application
// reusable code
// use fetch api in service rather than in component , and use the data anywhere in the app so you do not have to write and fetch again in individual components
