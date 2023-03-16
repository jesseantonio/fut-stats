import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, tap, throwError } from 'rxjs';
import { League } from 'src/app/core/entities/league';
import { LoaderService } from 'src/app/core/services/loader.service';
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

  constructor(private teamsService: TeamsService, private router: Router, public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getLogoTeams();
  }

  public getLogoTeams() {
    this.teamsService.logoTime().pipe(
      finalize(() => {
        this.loading = false;
      })).subscribe((value: any) => {
        let logosTimes = value.data.map((standing) => standing.logos['light']);
        this.logos = logosTimes;
        this.logos.pop();
        this.logos.splice(11, 1);
      });
  }

  public onClickOnTeam(index: any) {
    this.onChooseLeague(index);
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
        this.league = {
          name:'aus',
          alert: true
        };
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
            amount: [17, 18],
            qualifiersAmount: [16]
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
              name: "Fase de grupos da Liga dos Campeões"
            },
            continentalQualifiers: {
              amount: [3],
              name: "Qualificatórias da Liga dos Campeões"
            },
            continentalSecondDivision: {
              amount: [4],
              name: "Fase de grupos da Liga Europa"
            },
            continentalThirdDivision: {
              amount: [5],
              name: "Qualificatórias da Liga Conferência"
            },
          }
        }
        break;
      case 7:
        this.league = {
          name: "ger",
          relegated: {
            amount: [17, 18],
            qualifiersAmount: [16]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1, 2, 3, 4],
              name: "Fase de grupos da Liga dos Campeões"
            },
            continentalSecondDivision: {
              amount: [5],
              name: "Fase de grupos da Liga Europa"
            },
            continentalThirdDivision: {
              amount: [6],
              name: "Qualificatórias da Liga Conferência"
            },
          }
        }
        break;
      case 8:
        this.league = {
          name: "idn",
          relegated: {
            amount: [16, 17, 18]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1],
              name: "Fase de grupos da Liga dos Campeões da AFC"
            }
          },
          alert: true
        }
        break;
      case 9:
        this.league = {
          name: "ita",
          relegated: {
            amount: [18, 19, 20]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1, 2, 3, 4],
              name: "Fase de grupos da Liga dos Campeões"
            },
            continentalSecondDivision: {
              amount: [5],
              name: "Fase de grupos da Liga Europa"
            },
            continentalQualifiers: {
              amount: [6],
              name: "Qualificatórias da Liga Conferência"
            },
          }
        }
        break;
      case 10:
        this.league = {
          name: "jpn",
          relegated: {
            amount: [18]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1, 2],
              name: "Fase de grupos da Liga dos Campeões da AFC"
            },
            continentalQualifiers: {
              amount: [3],
              name: "Qualificatórias da Liga dos Campeões da AFC"
            }
          }
        }
        break;
      case 11:
        this.league = {
          name: "mex",
          continental: {
            continentalFirstDivision: {
              amount: [1, 2, 3, 4],
              name: "Série final"
            },
            continentalQualifiers: {
              amount: [5, 6, 7, 8, 9, 10, 11, 12],
              name: "Eliminatórias da série final"
            }
          }
        }
        break;
      case 12:
        this.league = {
          name: "por",
          relegated: {
            amount: [15, 16],
            qualifiersAmount: [13, 14]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1],
              name: "Fase de grupos da Liga dos Campeões"
            },
            continentalQualifiers: {
              amount: [3],
              name: "Qualificatórias da Liga dos Campeões"
            },
            continentalThirdDivision: {
              amount: [3, 4],
              name: "Qualificatórias da Liga Conferência"
            },
          }
        }
        break;
      case 13:
        this.league = {
          name: "rus",
          relegated: {
            amount: [15, 16],
            qualifiersAmount: [13, 14]
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
              amount: [3, 4],
              name: "Qualificatórias da Liga Conferência"
            },
          },
          alert: true
        }
        break;
      case 14:
        this.league = {
          name: 'sgp',
          alert: true
        }
        break;
      case 15:
        this.league = {
          name: "esp",
          relegated: {
            amount: [18, 19, 20]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1, 2, 3, 4],
              name: "Fase de grupos da Liga dos Campeões"
            },
            continentalSecondDivision: {
              amount: [5],
              name: "Fase de grupos da Liga Europa"
            },
            continentalThirdDivision: {
              amount: [6],
              name: "Fase de grupos da Liga Conferência"
            }
          }
        }
        break;
      case 16:
        this.league = {
          name: 'tha',
          alert: true
        }
        break;
      case 17:
        this.league = {
          name: "tur",
          relegated: {
            amount: [16, 17, 18, 19]
          },
          continental: {
            continentalFirstDivision: {
              amount: [1],
              name: "Fase de grupos da Liga dos Campeões"
            },
            continentalThirdDivision: {
              amount: [2, 3],
              name: "Qualificatórias da Liga Conferência"
            }
          },
          alert: true
        }
        break;
      default:
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
    }
  }
}
