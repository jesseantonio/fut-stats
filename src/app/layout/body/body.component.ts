import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/core/services/teams.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public logosTimes = [];
  public logos = [];
  public league: string;
  public relegatedTeamsAmount: number[];

  constructor(private teamsService: TeamsService, private router: Router) {}

  ngOnInit(): void {
    this.getLogoTeams();
  }

  public getLogoTeams() {
    this.teamsService.logoTime().subscribe((value: any) => {
      let logosTimes = value.data.map((standing) => standing.logos['light']);
      this.logos = logosTimes;
      this.logos.pop();
      this.logos.splice(11, 1);
    });
  }

  public onClickOnTeam(index: any) {
    this.onChooseLeague(index);
    this.router.navigateByUrl('/teams', {
      state: [this.league, 1]
    })
  }

  public onChooseLeague(index: number) {
    switch (index) {
      case 0:
        this.league = 'arg';
        this.relegatedTeamsAmount = null;
        break;
      case 1:
        this.league = 'aus';
        this.relegatedTeamsAmount = null;
        break;
      case 2:
        this.league = 'bra';
        this.relegatedTeamsAmount = [17, 18, 19, 20];
        break;
      case 3:
        this.league = 'chn';
        this.relegatedTeamsAmount = [16, 17, 18]
        break;
      case 4:
        this.league = 'ned';
        this.relegatedTeamsAmount = [17, 18]
        break;
      case 5:
        this.league = 'eng';
        this.relegatedTeamsAmount = [18, 19, 20]
        break;
      case 6:
        this.league = 'fra';
        this.relegatedTeamsAmount = [17, 18, 19, 20];
        break;
      case 7:
        this.league = 'ger';
        this.relegatedTeamsAmount = [17, 18]
        break;
      case 8:
        this.league = 'idn';
        this.relegatedTeamsAmount = [16, 17, 18]
        break;
      case 9:
        this.league = 'ita';
        this.relegatedTeamsAmount = [18, 19, 20]
        break;
      case 10:
        this.league = 'jpn';
        this.relegatedTeamsAmount = [18]
        break;
      case 11:
        this.league = 'mex';
        break;
      case 12:
        this.league = 'por';
        break;
      case 13:
        this.league = 'rus';
        break;
      case 14:
        this.league = 'sgp';
        break;
      case 15:
        this.league = 'esp';
        break;
      case 16:
        this.league = 'tha';
        break;
      case 17:
        this.league = 'tur';
        break;
      default:
        this.league = 'bra'
        break;
    }
  }
}
