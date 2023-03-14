import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-table-caption',
  templateUrl: './table-caption.component.html',
  styleUrls: ['./table-caption.component.scss']
})
export class TableCaptionComponent implements OnInit {

  public league: any;

  constructor(private router: Router, private localStorageService: LocalStorageService) {
    if (this.router.getCurrentNavigation().extras.state != undefined) {
      this.league = this.router.getCurrentNavigation().extras.state[0];
    } else {
      this.league = localStorageService.get("league");
    }
  }

  @Input() season: Observable<string>;

  ngOnInit(): void {
  }

}
