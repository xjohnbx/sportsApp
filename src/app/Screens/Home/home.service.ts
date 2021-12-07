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
    return this.http.get<SportResponse>("https://site.api.espn.com/apis/site/v2/sports/" + sport + "/scoreboard")
  }
}