import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/core/services/teams.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  public logosTimes = [];
  public logos = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getLogoTeams();
  }

  public getLogoTeams() {
    this.teamsService.logoTime().subscribe((value: any) => {
        let logosTimes = value.data.map((standing) => standing.logos['light']);
        this.logos = logosTimes;
        this.logos.pop();
        this.logos.splice(12, 1)
      });
  }

}
