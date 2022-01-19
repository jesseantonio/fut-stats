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

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.all().subscribe((value: any) => {
      // console.log(value);
      let time = (value.data.standings.find(standing => standing.team.id === '819').team.logos)

      this.teams = (value.data.standings.map(standing => standing.team.name))
      let tela = this.teams.slice(0, 20)
      console.log(tela)
      this.teams = tela;
    })
  }

  headers = ['Clube', 'Pts'];

}
