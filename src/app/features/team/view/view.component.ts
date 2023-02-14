import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/core/services/teams.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public season: string;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {

  }
  public captureSeason(event: string) {
    console.log(event)
    this.season = event;
  }
}
