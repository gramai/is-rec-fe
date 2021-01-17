import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Criteria} from '../search-bar/search-bar.component';

@Component({
  selector: 'app-criteria-element',
  templateUrl: './criteria-element.component.html',
  styleUrls: ['./criteria-element.component.css']
})
export class CriteriaElementComponent implements OnInit {

  @Input() criteria: Criteria;
  @Input() allCriteria: Criteria[];
  @Output() allCriteriaChange = new EventEmitter<Criteria[]>();

  inEditMode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  notEditableAndSave(newValue?: any): void {
    this.inEditMode = false;
    if (!newValue || newValue.length === 0) {
      this.deleteCriteria();
    }
  }

  deleteCriteria(): void {
    let foundCriteria = false;
    let criteriaIndexToRemove = 0;
    for (let i = 0; i < this.allCriteria.length; i++) {
      if (this.allCriteria[i].name === this.criteria.name) {
        foundCriteria = true;
        criteriaIndexToRemove = i;
        break;
      }
    }
    if (foundCriteria) {
      this.allCriteria.splice(criteriaIndexToRemove, 1);
    }
  }
}
