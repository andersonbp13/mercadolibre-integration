import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss']
})
export class SearchResultsPageComponent implements OnInit {

  results: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.results = history.state.data.results;
    console.log(history.state.data.results);
  }

}
