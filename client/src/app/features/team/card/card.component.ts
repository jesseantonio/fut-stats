import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Team } from 'src/app/core/model/team';
import { TeamsService } from 'src/app/core/services/teams.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  teams = [];
  points = [];
  partidasJogadas = [];
  vitorias = [];
  empates = [];
  derrotas = [];
  golsFeitos = [];
  golsSofridos = [];
  saldoDeGols = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.all().subscribe((value: any) => {
      this.teams = value.data.standings.map(standing => ({...standing.team, ...{stats: standing.stats}}))

      let teste = value.data.standings.map(standing => ({...standing.team, ...{stats: standing.stats.hasOwnProperty('name')}}))
      console.log(this.teams)


      let time = (value.data.standings.find(standing => standing.team.id === '819').team.logos)

      value.data.standings.map(standing => standing.team.name)
      let tela = this.teams.slice(0, 20)


      let pontos = value.data.standings.flatMap(standing => standing.stats.filter(stat => stat.name == "points").map(stat => stat.value))
      this.points = pontos;

      let partidasJogadas = value.data.standings.flatMap(standing => standing.stats.filter(stat => stat.name == "gamesPlayed").map(stat => stat.value))
      this.partidasJogadas = partidasJogadas;

      let vitorias = value.data.standings.flatMap(standing => standing.stats.filter(stat => stat.name == "wins").map(stat => stat.value));
      this.vitorias = vitorias;

      let empates = value.data.standings.flatMap(standing => standing.stats.filter(stat => stat.name == "ties").map(stat => stat.value));
      this.empates = empates;

      let derrotas = value.data.standings.flatMap(standing => standing.stats.filter(stat => stat.name == "losses").map(stat => stat.value));
      this.derrotas = derrotas;

      let golsFeitos = value.data.standings.flatMap(standing => standing.stats.filter(stat => stat.name == "pointsFor").map(stat => stat.value));
      this.golsFeitos = golsFeitos;

      let golsSofridos = value.data.standings.flatMap(standing => standing.stats.filter(stat => stat.name == "pointsAgainst").map(stat => stat.value));
      this.golsSofridos = golsSofridos;

      let saldoDeGols = value.data.standings.flatMap(standing => standing.stats.filter(stat => stat.name == "pointDifferential").map(stat => stat.value));
      this.saldoDeGols = saldoDeGols;







      let sem1 = value.data.standings.map(standing => ({...standing.team, ...{stats: standing.stats.filter(stat => stat.name != 'All Splits')}}))
      let sem2 = value.data.standings.map(standing => ({...standing.team, ...{stats: standing.stats.filter(stat => stat.name != 'ppg')}}))
      let sem3 = value.data.standings.map(standing => ({...standing.team, ...{stats: standing.stats.filter(stat => stat.name != 'deductions')}}))
      let sem4 = value.data.standings.map(standing => ({...standing.team, ...{stats: standing.stats.filter(stat => stat.name != 'rankChange')}}))
      let sem5 = value.data.standings.map(standing => ({...standing.team, ...{stats: standing.stats.filter(stat => stat.name != 'points')}}))



    })
  }

  headers = ['Clube', 'Pts', 'PJ', 'VIT', 'E', 'DER', 'GC', 'SG', 'Últimas cinco'];

}
