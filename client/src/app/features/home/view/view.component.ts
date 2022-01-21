import { TeamsService } from 'src/app/core/services/teams.service';
import { Team } from './../../../core/model/team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.all().subscribe((value) => {
      // this.team = value
    })
  }

  team: Team[] = [];


}
