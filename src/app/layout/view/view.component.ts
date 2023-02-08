import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/core/services/teams.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
  }

}
