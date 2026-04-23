import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  person = {
    name : "saksham",
    education : "Btech",
    address : {
      pincode : 243720,
      state : "punjab"
    }
  }

}
