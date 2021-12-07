import { Component, OnInit, Input } from '@angular/core';
import { Event, Competition } from '~/app/Objects/Response'

@Component({
  selector: 'ns-mlb-card',
  templateUrl: './mlb-card.component.html',
  styleUrls: ['./mlb-card.component.css'],
  moduleId: module.id
})

export class MlbCardComponent implements OnInit {
  @Input() event: Event
  
  constructor() { }

  ngOnInit() {

  }

  isTopOfInning(competition: Competition): boolean {
    if (competition.situation) {
      return competition.situation.batter.team.id == competition.competitors[0].team.id
    }
  }
}