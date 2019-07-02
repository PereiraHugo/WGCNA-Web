import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Tab group with dynamic height based on tab contents
 */
@Component({
  selector: 'app-global-tabs',
  templateUrl: './global-tabs.component.html',
  styleUrls: ['./global-tabs.component.css']
})
export class GlobalTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs = ['Home', 'Form'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('Results');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
