import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgClass, NgStyle, NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // step 1 --> create a container to store the data sent by parent
  @Input() data!:string;
  @Input() val!:number;

  // container for array data (parent-->child)
  @Input() arr!:string[];

  // container for Object data
  @Input() obj = {};


  @Output() messageSent = new EventEmitter();
  sendMessage() {
    this.messageSent.emit('Hello from Child! 👋');
  }

  // sending this marks array to parent 
  @Output() marksOfStudent = new EventEmitter();
  marks: number[] = [10 , 20 , 30 , 40];
  sendMarks() {
    this.marksOfStudent.emit(this.marks);
  }

  // This is directive
  act : boolean = true;
  inact : boolean = false;

  handleClass() {
    this.act = !this.act;
    this.inact = !this.inact;
  }

  // This is ngStyle Directive
  css = {
    color : "green",
    backgroundColor : "brown"
  }

  // structural directive
  login:boolean = true;

  handleLogin() {
    this.login = !this.login;
  }


  // this is ngFor directive
  subjects:string[] = ['html', 'css', 'js', 'ts', 'angular'];

  // This is ngSwitch
  user:string = "user";
}
