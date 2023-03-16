import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/core/entities/league';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TeamsService } from 'src/app/core/services/teams.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public season: string;
  public alert: boolean;

  constructor(private teamsService: TeamsService, public loaderService: LoaderService) { }

  ngOnInit(): void {}

  public captureSeason(event: string) {
    this.season = event;
  }

  public captureAlert(event: boolean) {
    this.alert = event;
  }

}
