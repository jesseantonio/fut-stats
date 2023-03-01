import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-caption',
  templateUrl: './table-caption.component.html',
  styleUrls: ['./table-caption.component.scss']
})
export class TableCaptionComponent implements OnInit {

  public league: any;

  constructor(private router: Router) {
    this.league = this.router.getCurrentNavigation().extras.state[0];
  }

  @Input() season: Observable<string>;

  ngOnInit(): void {
    console.log(this.league)
  }

}
