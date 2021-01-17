import {Component, Input, OnInit} from '@angular/core';
import {Criteria} from '../search-bar/search-bar.component';

@Component({
  selector: 'app-criteria-element',
  templateUrl: './criteria-element.component.html',
  styleUrls: ['./criteria-element.component.css']
})
export class CriteriaElementComponent implements OnInit {

  @Input() criteria: Criteria;
  @Input() allCriteria: Criteria[];

  inEditMode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  notEditableAndSave(newValue?: any): void {
    this.inEditMode = false;
    if (!newValue || newValue.length === 0) {
      //TODO: Remove criteria if empty
    }
  }
}
