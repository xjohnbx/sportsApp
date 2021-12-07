import { Component, OnInit, Input } from '@angular/core';
import { Event, Competition } from '~/app/Objects/Response'
import { Nba_Logo } from '~/app/Enums/Logo'

@Component({
  selector: 'ns-nba-card',
  templateUrl: './nba-card.component.html',
  styleUrls: ['./nba-card.component.css'],
  moduleId: module.id
})
export class NbaCardComponent implements OnInit {
  @Input() event: Event
  competition: Competition

  // Random values
  betOver: number = 230;
  betUnder: number = 239.11;
  projectedScore: number = 245.12;

  constructor() { }

  ngOnInit() {
    this.competition = this.event.competitions[0]
    this.calculatePointProjections()
  }

  calculatePointProjections() {
    var secondsPlayed = this.getSecondsPlayed()
    var currentPoints = this.getCurrentPoints()

    var secondsPerGame = 2880

    if (secondsPlayed > 0) {
      this.projectedScore = (currentPoints / secondsPlayed) * secondsPerGame
      this.betOver = this.projectedScore + (1 - (secondsPlayed / secondsPerGame * 7.5))
      this.betUnder = this.projectedScore - (1 - (secondsPlayed / secondsPerGame * 7.5))
    }
  }

  getSecondsPlayed(): number {
    return (this.competition.status.period * 720 /* 12 min x 60 */) - this.competition.status.clock
  }

  getCurrentPoints(): number {
    var currentPoints: number = 0;
    for (var competitor of this.competition.competitors) {
      currentPoints += parseInt(competitor.score)
    }

    return currentPoints;
  }

  getImageRoute(team: string): string {
    return Nba_Logo[team]
  }
}