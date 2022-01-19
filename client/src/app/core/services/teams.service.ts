import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../model/team';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private _team = new Subject<Team>();

  private baseUrl = `${environment.baseUrl}/leagues/bra.1/standings?season=2018`

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get<Team>(this.baseUrl)
  }

  getTeam(): Observable<Team> {
    return this._team.asObservable();
  }

}
