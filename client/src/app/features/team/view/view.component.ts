import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/model/team';
import { TeamsService } from 'src/app/core/services/teams.service';

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
