import {Component, OnInit} from '@angular/core';
import {RecommendationsService} from '../service/recommendations/recommendations.service';

export interface Criteria {
  name: string;
  value: string;
}

export interface Match {
  name: string;
  description: string;
  url: string;
}

export enum CriteriaNames {
  'Area' = 'Area',
  'Type' = 'Type',
  'Programming Language' = 'Programming Language',
  'Name' = 'Name'
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // TODO: get criteria from service
  // allCriteria: Criteria[] = [
  //   {
  //     name: 'Area',
  //     value: 'Software Engineering'
  //   },
  //   {
  //     name: 'Type',
  //     value: 'IDE'
  //   },
  //   {
  //     name: 'Programming Language',
  //     value: 'Java'
  //   }
  // ];

  allCriteria: Criteria[] = [];

  criteriaNames: string[] = [
    CriteriaNames.Area,
    CriteriaNames.Type,
    CriteriaNames['Programming Language'],
    CriteriaNames.Name
  ];

  matches: Match[];

  inNewFilterMode = false;

  constructor(private recommendationsService: RecommendationsService) {
  }

  ngOnInit(): void {
    this.recommendationsService.getRecommendations(null, null, null, null)
      .subscribe((data) => {
        this.matches = data;
      });
  }

  refreshMatches(): void {
    let name = '';
    let type = '';
    let programmingLanguage = '';
    let area = '';

    for (const crit of this.allCriteria) {
      if (crit.name === CriteriaNames.Name) {
        name = crit.value;
      }
      if (crit.name === CriteriaNames.Type) {
        type = crit.value;
      }
      if (crit.name === CriteriaNames['Programming Language']) {
        programmingLanguage = crit.value;
      }
      if (crit.name === CriteriaNames.Area) {
        area = crit.value;
      }
    }

    this.recommendationsService.getRecommendations(name, type, programmingLanguage, area)
      .subscribe((data) => {
        this.matches = data;
        console.log('Mathces inside are: ');
        console.log(this.matches);
      });
    console.log('Mathces are: ');
    console.log(this.matches);
  }
}
