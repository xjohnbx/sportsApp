import { Component, Input, OnInit } from '@angular/core';
import { Situation } from '~/app/Objects/Response';

@Component({
  selector: 'ns-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css'],
  moduleId: module.id
})

export class BasesComponent implements OnInit {
  @Input() inning: string
  @Input() situation: Situation
  @Input() isTopOfInning: string

  onFirst = false
  onSecond = false
  onThird = false
  balls = 0
  strikes = 0
  outs = 0
  inningArrow = "▼"

  constructor() { }

  ngOnInit() {
    //  && this.situation.onFirst && this.situation.onSecond && this.situation.onThird  ( We shouldn't need this code as only MLB goes here and if situation is valid so will onBase*)
    if (this.situation) {
      this.onFirst = this.situation.onFirst ?? false
      this.onSecond = this.situation.onSecond ?? false
      this.onThird = this.situation.onThird ?? false

      this.balls = this.situation.balls ?? 0
      this.strikes = this.situation.strikes ?? 0
      this.outs = this.situation.outs ?? 0
    }


    this.isTopOfInning ? this.inningArrow = "▲" : this.inningArrow = "▼"
  }
}