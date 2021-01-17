import {Component, OnInit} from '@angular/core';

export interface Criteria {
  name: string;
  value: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  noCriteriaExist = false;
  // criteria: Criteria[];

  allCriteria: Criteria[] = [
    {
      name: 'Area',
      value: 'Software Engineering'
    },
    {
      name: 'Type',
      value: 'IDE'
    },
    {
      name: 'Programming Language',
      value: 'Java'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
