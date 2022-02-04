import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/core/services/teams.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  @Input()
  logosTimes = [];
  logos = [];

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.logoTime().subscribe((value: any) => {
      let logosTimes = value.data.map((standing) => standing.logos['light']);
      this.logos = logosTimes;
      this.logos.pop();
      this.logos.splice(12, 1)
    });
  }
}
