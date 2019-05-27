import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Radio } from './radio';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input()
  entities: Radio[];

  @Input()
  id: string;

  @Input()
  value: string;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.valueChange.emit(this.value);
  }
}
