import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-luxury',
  imports: [Button],
  templateUrl: './luxury.html',
  styleUrl: './luxury.css',
})
export class Luxury {
  user = {
    name : "sakdjs",
    salary : 499999,
    isAlive : true,
  }

  abc = NaN;

  data() {
    return `Current Obj : ${this.user.name}`;
  }

  isActive = false;

  tag = "<mark>wfergerg</mark>"

  imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/049/855/708/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg";

  altContent = "There used  to be an Image";

}
