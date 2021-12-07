import { Component, OnInit, Input } from '@angular/core';
import { Event } from '~/app/Objects/Response';
import { Nfl_Logo } from '~/app/Enums/Logo';

@Component({
  selector: 'ns-nfl-card',
  templateUrl: './nfl-card.component.html',
  styleUrls: ['./nfl-card.component.css'],
  moduleId: module.id
})

export class NflCardComponent implements OnInit {

  @Input() event: Event
  constructor() { }

  ngOnInit() {

  }

  getImageRoute(team: string): string {
    return Nfl_Logo[team]
  }
}
