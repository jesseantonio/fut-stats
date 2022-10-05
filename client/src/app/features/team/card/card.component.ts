import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/core/services/teams.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public logos = []
  public teams = [];
  public headers = ['Clube', 'Vitórias', 'Derrotas', 'Empates', 'Jogos', 'Gols', 'Gols Sofridos', 'Pontos', 'Saldo de Gols'];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getTeamStats();
    this.getTeamLogo();
  }

  public getTeamStats() {
    this.teamsService.all().subscribe((value: any) => {
      this.teams = value.data.standings.map(standing =>
        ({ ...standing.team, ...{ stats: standing.stats.filter(stat => !['All Splits', 'deductions', 'ppg', 'rankChange', 'rank'].includes(stat.name)).sort() } }))
    })
  }

  private getTeamLogo() {
    this.teamsService.logoTime().subscribe((value: any) => {
      let logosTimes = value.data.map(standing => standing.logos["light"])
      this.logos = logosTimes
    })
  }

}
