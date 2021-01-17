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

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  noCriteriaExist = false;
  // criteria: Criteria[];

  // TODO: get criteria from service
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

  criteriaNames: string[] = [
    'Area',
    'Type',
    'Programming Language',
    'Name'
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
    this.recommendationsService.getRecommendations(null, null, null, null)
      .subscribe((data) => {
        this.matches = data;
      });
  }
}
