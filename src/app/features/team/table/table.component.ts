import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/core/services/teams.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public logos = []
  public teams = [];
  public headers = ['Clube', 'Pontos', 'Partidas Jogadas', 'Vitórias', 'Empates', 'Derrotas', 'Gols Marcados', 'Gols Sofridos', 'Saldo de Gols'];
  public stats: any;
  public selectedLeague: any;

  constructor(private teamsService: TeamsService, private router: Router) {
    this.selectedLeague = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
    this.getTeamStats();
    this.getTeamLogo();
  }

  public getTeamStats() {
    this.teamsService.all(this.selectedLeague.extras.state).subscribe((value: any) => {
      this.teams = value.data.standings.map(standing =>
        ({ ...standing.team, ...{ stats: standing.stats.filter(stat => !['All Splits', 'deductions', 'ppg', 'rankChange', 'rank'].includes(stat.name)).sort() } }))
    })
  }

  public getTeamLogo() {
    this.teamsService.logoTime().subscribe((value: any) => {
      let logosTimes = value.data.map(standing => standing.logos["light"])
      this.logos = logosTimes
    })
  }

  public formatTeamStats(obj: any) {
    const [jogosJogados, derrotas, pontos, GC, GM, empates, vitorias, saldoDeGols] = obj;
    const newObjStats = { pontos, jogosJogados, vitorias, empates, derrotas, GM, GC, saldoDeGols }

    return this.stats = Object.keys(newObjStats).map(function (key) { return newObjStats[key] });
  }
}
