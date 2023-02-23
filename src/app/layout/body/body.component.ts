import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, tap, throwError } from 'rxjs';
import { League } from 'src/app/core/entities/league';
import { TeamsService } from 'src/app/core/services/teams.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public logosTimes = [];
  public logos = [];
  public league: League;
  public loading: boolean = true;

  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit(): void {
    this.getLogoTeams();
  }

  public getLogoTeams() {
    this.teamsService.logoTime().pipe(
      finalize(() => {
        this.loading = false;
      })).subscribe((value: any) => {
        console.log(this.loading)
        let logosTimes = value.data.map((standing) => standing.logos['light']);
        this.logos = logosTimes;
        this.logos.pop();
        this.logos.splice(11, 1);
      });
  }

  public onClickOnTeam(index: any) {
    console.log(index)
    this.onChooseLeague(index);
    this.router.navigateByUrl('/teams', {
      state: [this.league]
    })
  }

  public onChooseLeague(index: number) {
    switch (index) {
      case 0:
        this.league.name = "arg";
        this.league.continental.continentalFirstDivision.amount = [1];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Copa Libertadores";
        break;
      case 1:
        this.league.name = 'aus';
        break;
      case 2:
        this.league.name = 'bra';
        this.league.relegated.amount = [17, 18, 19, 20];
        this.league.continental.continentalFirstDivision.amount = [1, 2, 3, 4, 5, 6];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Copa Libertadores";
        this.league.continental.continentalSecondDivision.amount = [9, 10, 11, 12, 14];
        this.league.continental.continentalSecondDivision.name = "Fase de grupos da Copa Sul-Americana";
        this.league.continental.continentalQualyfiers.amount = [7, 8];
        this.league.continental.continentalQualyfiers.name = "Qualificatórias da Copa Libertadores"
        break;
      case 3:
        this.league.name = 'chn';
        this.league.continental.continentalFirstDivision.amount = [1];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Liga dos Campeões da AFC"
        this.league.continental.continentalQualyfiers.amount = [2, 3];
        this.league.continental.continentalQualyfiers.name = "Qualificatórias da Liga dos Campeões da AFC"
        this.league.relegated.amount = [16, 17, 18]
        break;
      case 4:
        this.league.name = 'ned';
        this.league.continental.continentalFirstDivision.amount = [1];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Liga dos Campeões"
        this.league.continental.continentalQualyfiers.amount = [2];
        this.league.continental.continentalQualyfiers.name = "Qualificatórias da Liga dos Campeões"
        this.league.continental.continentalSecondDivision.amount = [3];
        this.league.continental.continentalSecondDivision.name = "Qualificatórias da Liga Conferência"
        this.league.relegated.qualifyersAmount = [16]
        this.league.relegated.amount = [17, 18]
        break;
      case 5:
        this.league.name = 'eng';
        this.league.continental.continentalFirstDivision.amount = [1, 2, 3, 4];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Liga dos Campeões"
        this.league.continental.continentalQualyfiers.amount = [5];
        this.league.continental.continentalQualyfiers.name = "Qualificatórias da Liga dos Campeões"
        this.league.relegated.amount = [18, 19, 20]
        break;
      case 6:
        this.league.name = 'fra';
        this.league.continental.continentalFirstDivision.amount = [1, 2];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Liga dos Campeões"
        this.league.continental.continentalQualyfiers.amount = [3];
        this.league.continental.continentalQualyfiers.name = "Qualificatórias da Liga dos Campeões"
        this.league.continental.continentalSecondDivision.amount = [4];
        this.league.continental.continentalSecondDivision.name = "Fase de grupos da Liga Europa"
        this.league.continental.continentalThirdDivision.amount = [5];
        this.league.continental.continentalThirdDivision.name = "Qualificatórias da Liga Conferência"
        this.league.relegated.amount = [17, 18, 19, 20];
        break;
      case 7:
        this.league.name = 'ger';
        this.league.continental.continentalFirstDivision.amount = [1, 2, 3, 4];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Liga dos Campeões"
        this.league.continental.continentalSecondDivision.amount = [5];
        this.league.continental.continentalSecondDivision.name = "Fase de grupos da Liga Europa"
        this.league.continental.continentalThirdDivision.amount = [6];
        this.league.continental.continentalThirdDivision.name = "Qualificatórias da Liga Conferência"
        this.league.relegated.qualifyersAmount = [16]
        this.league.relegated.amount = [17, 18]
        break;
      case 8:
        this.league.name = 'idn';
        this.league.relegated.amount = [16, 17, 18]
        break;
      case 9:
        this.league.name = 'ita';
        this.league.continental.continentalFirstDivision.amount = [1, 2, 3, 4];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Liga dos Campeões"
        this.league.continental.continentalSecondDivision.amount = [5];
        this.league.continental.continentalSecondDivision.name = "Fase de grupos da Liga Europa"
        this.league.continental.continentalThirdDivision.amount = [6];
        this.league.continental.continentalThirdDivision.name = "Qualificatórias da Liga Conferência"
        this.league.relegated.amount = [18, 19, 20]
        break;
      case 10:
        this.league.name = 'jpn';
        this.league.relegated.amount = [18]
        break;
      case 11:
        this.league.name = 'mex';
        break;
      case 12:
        this.league.name = 'por';
        this.league.relegated.amount = [17, 18]
        break;
      case 13:
        this.league.name = 'rus';
        this.league.relegated.amount = [15, 16]
        break;
      case 14:
        this.league.name = 'sgp';

        break;
      case 15:
        this.league.name = 'esp';
        this.league.continental.continentalFirstDivision.amount = [1, 2, 3, 4];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Liga dos Campeões"
        this.league.continental.continentalSecondDivision.amount = [5];
        this.league.continental.continentalSecondDivision.name = "Fase de grupos da Liga Europa"
        this.league.continental.continentalThirdDivision.amount = [6];
        this.league.continental.continentalThirdDivision.name = "Qualificatórias da Liga Conferência"
        this.league.relegated.amount = [18, 19, 20]
        break;
      case 16:
        this.league.name = 'tha';
        break;
      case 17:
        this.league.name = 'tur';
        this.league.continental.continentalFirstDivision.amount = [1];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Liga dos Campeões"
        this.league.continental.continentalThirdDivision.amount = [2, 3];
        this.league.continental.continentalThirdDivision.name = "Qualificatórias da Liga Conferência"
        this.league.relegated.amount = [16, 17, 18, 19];
        break;
      default:
        this.league.name = 'bra';
        this.league.continental.continentalFirstDivision.amount = [1, 2, 3, 4, 5, 6];
        this.league.continental.continentalFirstDivision.name = "Fase de grupos da Copa Libertadores";
        this.league.continental.continentalSecondDivision.amount = [9, 10, 11, 12, 14];
        this.league.continental.continentalSecondDivision.name = "Fase de grupos da Copa Sul-Americana";
        this.league.continental.continentalQualyfiers.amount = [7, 8];
        this.league.continental.continentalQualyfiers.name = "Qualificatórias da Copa Libertadores"
        this.league.relegated.amount = [17, 18, 19, 20];
        break;
    }
  }
}
