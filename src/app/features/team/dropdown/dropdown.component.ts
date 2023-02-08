import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public seasons = [
    {
      id: 1,
      year: "2013"
    },
    {
      id: 2,
      year: "2014"
    },
    {
      id: 3,
      year: "2015"
    },
    {
      id: 4,
      year: "2016"
    },
    {
      id: 5,
      year: "2017"
    },
    {
      id: 6,
      year: "2018"
    },
    {
      id: 8,
      year: "2019"
    },
    {
      id: 9,
      year: "2020"
    }
  ]

  public selectedSeason: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelected(value: string) {
    this.selectedSeason = value;
  }

}
