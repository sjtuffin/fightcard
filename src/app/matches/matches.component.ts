import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../common/models/match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  @Input() matches: Match[] = [];
  public selectedTab: Match | undefined;

  constructor() {}

  ngOnInit(): void {
    this.selectedTab = this.matches[0];
    //  todo - refine keyboard focus order of tabs on desktop
  }

  selectTab(match: Match) {
    this.selectedTab = match;
  }
}
