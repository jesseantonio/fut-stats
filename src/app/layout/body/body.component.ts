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
  public league = {} as League;
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
    debugger
    this.onChooseLeague(index);
    console.log(this.league)
    this.router.navigateByUrl('/teams', {
      state: [this.league]
    })
  }

  public onChooseLeague(index: number) {
    switch (index) {
      case 0:
        this.league = {
          name: "arg",
          continental: {
            continentalFirstDivision: {
              amount: [1],
              name: "Fase de grupos da Copa Libertadores"
            }
          }
        }
        break;
      case 1:
        this.league.name = 'aus';
        break;
      case 2:
        this.league = {
          name: "bra",
          relegated: {
            amount: [17, 18, 19, 20]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1, 2, 3, 4, 5, 6],
              name: "Fase de grupos da Copa Libertadores"
            },
            continentalQualifiers: {
              amount: [7, 8],
              name: "Qualificatórias da Copa Libertadores"
            },
            continentalSecondDivision: {
              amount: [9, 10, 11, 12, 13, 14],
              name: "Fase de grupos da Copa Sul-Americana"
            },
          }
        }
        break;
      case 3:
        this.league = {
          name: "chn",
          relegated: {
            amount: [16, 17, 18]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1],
              name: "Fase de grupos da Liga dos Campeões da AFC"
            },
            continentalQualifiers: {
              amount: [2, 3],
              name: "Qualificatórias da Liga dos Campeões da AFC"
            }
          }
        }
        break;
      case 4:
        this.league = {
          name: "ned",
          relegated: {
            amount: [17, 18]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1],
              name: "Fase de grupos da Liga dos Campeões"
            },
            continentalQualifiers: {
              amount: [2],
              name: "Qualificatórias da Liga dos Campeões"
            },
            continentalSecondDivision: {
              amount: [3],
              name: "Qualificatórias da Liga Conferência"
            },
          }
        }
        break;
      case 5:
        this.league = {
          name: "eng",
          relegated: {
            amount: [18, 19, 20]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1, 2, 3, 4],
              name: "Fase de grupos da Liga dos Campeões"
            },
            continentalQualifiers: {
              amount: [5],
              name: "Qualificatórias da Liga dos Campeões"
            }
          }
        }
        break;
      case 6:
        this.league = {
          name: "fra",
          relegated: {
            amount: [17, 18, 19, 20]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1, 2],
              name: "Fase de grupos da Liga Europa"
            },
            continentalQualifiers: {
              amount: [3],
              name: "Qualificatórias da Liga dos Campeões"
            },
            continentalSecondDivision: {
              amount: [4],
              name: "Qualificatórias da Liga Conferência"
            },
          }
        }
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
        this.league.continental.continentalQualifiers.amount = [7, 8];
        this.league.continental.continentalQualifiers.name = "Qualificatórias da Copa Libertadores"
        this.league.relegated.amount = [17, 18, 19, 20];
        break;
    }
  }
}
