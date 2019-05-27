import { Component } from '@angular/core';
import { Checkbox } from './checkbox/checkbox';
import { Radio } from './radio/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: string[] = [];
  checkboxs: Checkbox[] = [
    {
      value: '1',
      label: 'test-1',
      checked: false
    },
    {
      value: '2',
      label: 'test-2',
      checked: false
    }
  ];
  radios: Radio[] = [
    {
      value: '1',
      label: 'test-1'
    },
    {
      value: '2',
      label: 'test-2'
    }
  ];
  radioValue = '1';

  constructor() {
  }

  event($event: string) {
    this.items.push($event);
  }

  dump() {
    console.log('checkboxs', this.checkboxs, 'radio', this.radioValue);
  }
}
