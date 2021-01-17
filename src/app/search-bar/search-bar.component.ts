import {Component, OnInit} from '@angular/core';

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

  // TODO: get criteria names from service
  criteriaNames: string[] = [
    'Area',
    'Type',
    'Programming Language'
  ];

  matches: Match[] = [
    {
      name: 'Intellij Idea',
      description: 'Intellij Idea DescriptionDescriptionDescription',
      url: 'https://www.google.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    },
    {
      name: 'Netbeans',
      description: 'Netbeans description',
      url: 'https://www.facebook.com'
    }
  ];

  inNewFilterMode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
