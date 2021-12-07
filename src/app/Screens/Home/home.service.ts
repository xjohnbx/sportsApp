import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SportResponse } from '~/app/Objects/Response';
import { Sport } from '~/app/Enums/Sports';

@Injectable({
  providedIn: 'root',
})

export class HomeService {
  constructor(private http: HttpClient) { }

  public getScoreboardData(sport: string = Sport.nba): Observable<SportResponse> {
    return this.http.get<SportResponse>("http://192.168.0.226:3000/scoreboard?sport=" + sport)
  }
}