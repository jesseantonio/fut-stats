import { Input } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/core/services/teams.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewChecked {

  public logos = []
  public teams = [];
  public headers = ['Clube', 'Pontos', 'Partidas Jogadas', 'Vitórias', 'Empates', 'Derrotas', 'Gols Marcados', 'Gols Sofridos', 'Saldo de Gols'];
  public stats: any;
  public selectedLeague: any;
  public ACTUAL_SEASON = 2022;

  constructor(private teamsService: TeamsService, private router: Router) {
    this.selectedLeague = this.router.getCurrentNavigation();
  }

  @Input() season: string;

  ngOnInit(): void {
    this.buildTable();
    this.getTeamLogo();
  }

  ngAfterViewChecked(): void {
    if (this.season != null) {
      console.log(this.season)
      this.getTeamStats(this.selectedLeague.extras.state, this.season);
    }
  }

  public buildTable() {
    console.log(this.selectedLeague.extras.state)
    console.log(this.ACTUAL_SEASON)
    this.getTeamStats(this.selectedLeague.extras.state, this.ACTUAL_SEASON);
  }

  public getTeamStats(league: string, season: any) {
    this.teamsService.all(league, season).subscribe((value: any) => {
      this.teams = value.data.standings.map((standing: { team: any; stats: any[]; }) => ({ ...standing.team, ...{ stats: standing.stats.filter(stat => !['All Splits', 'deductions', 'ppg', 'rankChange', 'rank'].includes(stat.name)).sort() } }));
    });
  }

  public getTeamLogo() {
    this.teamsService.logoTime().subscribe((value: any) => {
      let logosTimes = value.data.map((standing: { logos: { [x: string]: any; }; }) => standing.logos["light"])
      this.logos = logosTimes
    })
  }

  public formatTeamStats(obj: any) {
    const [jogosJogados, derrotas, pontos, GC, GM, empates, vitorias, saldoDeGols] = obj;
    const newObjStats = { pontos, jogosJogados, vitorias, empates, derrotas, GM, GC, saldoDeGols }

    return this.stats = Object.keys(newObjStats).map(function (key) { return newObjStats[key] });
  }
}
