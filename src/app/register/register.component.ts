import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: string;

  @Output()
  event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.event.emit(this.register);
    this.register = '';
  }
}
