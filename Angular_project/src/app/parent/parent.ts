import { Component } from '@angular/core';
import { Child } from './child/child';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe, UpperCasePipe, DatePipe, SlicePipe, CurrencyPipe, TitleCasePipe, JsonPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [Child, NgStyle, FormsModule , LowerCasePipe, UpperCasePipe, DatePipe, SlicePipe, CurrencyPipe, TitleCasePipe, JsonPipe, DecimalPipe],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})

export class Parent {
  // step 2 : send the data from parent to child
  childStringData:string = "hello my child , I am your daddy";
  childNumberData:number = 10;
  childArrayData:string[] = ["step_1" , "step_2", "step_3"];
  childObjectData = {username: "saksham" , userid: 1234};

  // through interpolation
  imageUrl:string = "https://wallpapercat.com/w/full/0/f/3/5815630-3840x2160-desktop-hd-4k-wallpaper-image.jpg";

  // This is data sent from child to parent
  childMessage: string = '';

  receiveMessage(msg: string) {
    this.childMessage = msg;
  }


  // create a container to store the data sent by child
  marksOfStudent!: number[];

  // create an handler function that will recieve the data when event is fired
  receiveMarks(num : number[]) {
    this.marksOfStudent = num;
  }


  // This is two way binding using ngModel
  name:string = 'saksham';
  username:string = "";
  isChecked:boolean = true;
  selectedCity!:string;
  gender!:string;
  message!:string;
  volume!:number;
  darkMode:boolean = true ;


  // Pipes in angular
  nameOfuser:string = "saksham";
  priceOfProduct:number = 900;
  todayDate:Date = new Date();
  num : number = 797544;
  value : number = 3456789;

  obj = {
    name : "saksham",
    address : {
      state: "UP",
      pincode : 243720,
    }
  }

  weights:number[] = [50, 60 , 70];

  changeWeight() {
    this.weights.push(80);
  }


}
