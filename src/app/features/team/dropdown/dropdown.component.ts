import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public seasons = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]


  constructor() { }

  @Output() selectedSeason: Subject<string> = new Subject<string>();

  ngOnInit(): void {
  }

  public onSelected(e) {
    this.selectedSeason.next(e.target.value);
  }

}
