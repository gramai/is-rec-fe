import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Criteria, SearchBarComponent} from '../search-bar/search-bar.component';

@Component({
  selector: 'app-criteria-element',
  templateUrl: './criteria-element.component.html',
  styleUrls: ['./criteria-element.component.css']
})
export class CriteriaElementComponent implements OnInit {

  @Input() criteria: Criteria;
  @Output() criteriaChange = new EventEmitter<Criteria>();
  @Input() allCriteria: Criteria[];
  @Input() criteriaNames: string[];
  @Output() allCriteriaChange = new EventEmitter<Criteria[]>();

  @Input() newFilterMode = false;
  @Output() newFilterModeChange = new EventEmitter<boolean>();

  inEditMode = false;
  nameInEditMode = false;

  constructor(private searchBarComponent: SearchBarComponent) {
  }

  ngOnInit(): void {
  }

  notEditableAndSave(newValue?: any): void {
    this.inEditMode = false;
    if (!newValue || newValue.length === 0) {
      this.deleteCriteria();
    }
    this.criteriaChange.emit(this.criteria);
  }

  deleteCriteria(): void {
    let foundCriteria = false;
    let criteriaIndexToRemove = 0;
    console.log('Trying to delete criteria!');
    for (let i = 0; i < this.allCriteria.length; i++) {
      console.log('Parsing criteria');
      console.log(this.allCriteria[i]);
      if (this.allCriteria[i].name === this.criteria.name) {
        console.log('Matched criteria!');
        console.log(this.allCriteria[i]);
        foundCriteria = true;
        criteriaIndexToRemove = i;
        break;
      }
    }
    if (foundCriteria) {
      this.allCriteria.splice(criteriaIndexToRemove, 1);
    }
  }

  updateFilterName(event): void {
    this.criteria.name = event.target.value;
    this.criteriaChange.emit(this.criteria);
    this.allCriteria.push(this.criteria);

    this.newFilterMode = false;
    this.newFilterModeChange.emit(this.newFilterMode);
  }

  refreshMatches(): void {
    this.searchBarComponent.refreshMatches();
  }
}
