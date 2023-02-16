import { ElementRef, Input, ViewChild } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Observable, Subject } from 'rxjs';
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

  @ViewChild('table', {static: false}) table: ElementRef;

  @Input() season: Observable<string>;

  ngOnInit(): void {
    this.buildTable();
    this.getTeamLogo();
  }

  ngAfterViewChecked(): void {
    if (this.season != null) {
      this.getTeamStats(this.selectedLeague.extras.state[0], this.season);
    }
    if(this.table != null) {
      this.setRelegatedPositions();
    }
  }

  public buildTable() {
    this.getTeamStats(this.selectedLeague.extras.state[0], this.ACTUAL_SEASON);
  }

  public getTeamStats(league: string, season: any) {
    this.teamsService.all(league, season).subscribe((value: any) => {
      this.teams = value.data.standings.map((standing: { team: any; stats: any[]; }) => ({ ...standing.team, ...{ stats: standing.stats.filter(stat => !['All Splits', 'deductions', 'ppg', 'rankChange', 'rank'].includes(stat.name)).sort() } }));
      this.season = null;
    })
    this.setRelegatedPositions();
  }

  public getTeamLogo() {
    this.teamsService.logoTime().subscribe((value: any) => {
      let logosTimes = value.data.map((standing: { logos: { [x: string]: any; }; }) => standing.logos["light"])
      this.logos = logosTimes
      debugger
    })
  }

  public formatTeamStats(obj: any) {
    const [jogosJogados, derrotas, pontos, GC, GM, empates, vitorias, saldoDeGols] = obj;
    const newObjStats = { pontos, jogosJogados, vitorias, empates, derrotas, GM, GC, saldoDeGols }

    return this.stats = Object.keys(newObjStats).map(function (key) { return newObjStats[key] });
  }

  public setRelegatedPositions() {
    if (this.selectedLeague.extras.state[1] != null) {
      this.selectedLeague.extras.state[1].forEach((position: number) => {
        this.styleRowTable(this.table.nativeElement.children[position]);
      });
    }
  }

  public styleRowTable(row: any) {
    row.style.backgroundImage = "url('https://agrometeorologia.seagro.to.gov.br/wp-content/uploads/2019/09/tela-vermelha.png')";
    row.style.backgroundRepeat = "no-repeat"
    row.style.backgroundSize = "5px 100px"
  }
}
