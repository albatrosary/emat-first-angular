import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input()
  entities: any;

  @Input()
  id: string;

  @Input()
  value: any;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.valueChange.emit(this.value);
  }
}
