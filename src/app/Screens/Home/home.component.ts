import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { SportResponse } from '~/app/Objects/Response';
import { Sport } from '~/app/Enums/Sports';
import { SelectedIndexChangedEventData } from '@nativescript/core/ui/segmented-bar';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})

export class HomeComponent implements OnInit, OnDestroy {
  public sports = Sport;
  public sportResponse: SportResponse;

  currentSport: string;
  timer: Subscription;

  isLoading: boolean = true;

  
  constructor(private HomeService: HomeService) { }

  ngOnInit() {
    this.timer = interval(10000).subscribe((_ => {
      this.getData(this.currentSport)
    }))
  }

  getSport(index: number): string {
    switch(index) {
      case 0: return this.sports.mlb;
      case 1: return this.sports.nba;
      case 2: return this.sports.nfl;
      default: return this.sports.nba;
    }
  }

  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    this.isLoading = true;
    this.currentSport = this.getSport(args.newIndex)
    this.getData(this.currentSport)
  }

  getData(tabSport: string) {
    this.HomeService.getScoreboardData(tabSport).subscribe(sportResponse => {
      this.sportResponse = sportResponse
      console.log("Data Updated...")
      this.isLoading = false;
    })
  }

  refresh() {
    this.isLoading = true;
    this.getData(this.currentSport);
    console.log("Refreshing Data...")
  }

  ngOnDestroy() {
    this.timer.unsubscribe()
  }
}
