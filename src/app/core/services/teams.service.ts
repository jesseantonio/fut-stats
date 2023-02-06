import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../model/team';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private _team = new Subject<Team>();

  private baseUrl = `${environment.baseUrl}`


  constructor(private http: HttpClient) { }

  all(league: any){
    return this.http.get<Team>(`${this.baseUrl}/leagues/${league}.1/standings?season=2022`)
  }

  getOne(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.baseUrl}/${id}`);
  }


  logoTime(){
    return this.http.get<Team>(`${this.baseUrl}/leagues`)
  }

}
