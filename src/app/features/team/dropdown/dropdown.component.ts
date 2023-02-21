import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public seasons = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013"]


  constructor() { }

  @Output() selectedSeason: Subject<string> = new Subject<string>();

  ngOnInit(): void {
  }
    
  public onSelected(e) {
    this.selectedSeason.next(e.target.value);
  }

}
