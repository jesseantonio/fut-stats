import { AfterViewChecked, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from 'src/app/core/core.module';
import { LegendType } from 'src/app/core/enums/legendType';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { TeamsService } from 'src/app/core/services/teams.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewChecked {

  public logos = []
  public teams = [];
  public headers = ['Clube', 'Pontos', 'Partidas Jogadas', 'Vitórias', 'Empates', 'Derrotas', 'Gols Marcados', 'Gols Sofridos', 'Saldo de Gols'];
  public stats: any;
  public selectedLeague: any;
  public ACTUAL_SEASON = 2022;

  constructor(private teamsService: TeamsService, private router: Router, localStorageService: LocalStorageService, public loaderService: LoaderService) {
    if (this.router.getCurrentNavigation().extras.state != undefined) {
      this.selectedLeague = this.router.getCurrentNavigation().extras.state[0]; 3
      localStorageService.set("league", this.selectedLeague)
    } else {
      this.selectedLeague = localStorageService.get("league");
    }
  }

  @ViewChild('table', { static: false }) table: ElementRef;

  @Input() season: Observable<string>;

  @Output() alert: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.buildTable();
    this.getTeamLogo();
    this.alert.next(this.selectedLeague.alert);
  }

  ngAfterViewChecked(): void {
    if (this.season != null) {
      this.getTeamStats(this.selectedLeague.name, this.season);
    }
    if (this.table != null) {
      this.setColorPositionInRow();
    }
  }

  public buildTable() {
    this.getTeamStats(this.selectedLeague.name, this.ACTUAL_SEASON);
  }

  public getTeamStats(league: string, season: any) {
    this.teamsService.all(league, season).subscribe((value: any) => {
      this.teams = value.data.standings.map((standing: { team: any; stats: any[]; }) => ({ ...standing.team, ...{ stats: standing.stats.filter(stat => !['All Splits', 'deductions', 'ppg', 'rankChange', 'rank'].includes(stat.name)).sort() } }));
      this.season = null;
    })
  }

  public getTeamLogo() {
    this.teamsService.logoTime().subscribe((value: any) => {
      let logosTimes = value.data.map((standing: { logos: { [x: string]: any; }; }) => standing.logos["light"])
      this.logos = logosTimes
    })
  }

  public formatTeamStats(obj: any) {
    const [jogosJogados, derrotas, pontos, GC, GM, empates, vitorias, saldoDeGols] = obj;
    const newObjStats = { pontos, jogosJogados, vitorias, empates, derrotas, GM, GC, saldoDeGols }

    return this.stats = Object.keys(newObjStats).map(function (key) { return newObjStats[key] });
  }

  public setRelegatedPositions() {
    if (this.selectedLeague.relegated != null) {
      this.selectedLeague.relegated.amount.forEach((position: number) => {
        this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, LegendType.Relegated);
      });
    }
  }

  public setRelegatedQualifierPositions() {
    if (this.selectedLeague.relegated != null && this.selectedLeague.relegated.qualifiersAmount != null) {
      this.selectedLeague.relegated.qualifiersAmount.forEach((position: number) => {
        this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, LegendType.RelegatedQualifiers);
      });
    }
  }

  public setContinentalFirstDivisionPositions() {
    if (this.selectedLeague.continental.continentalFirstDivision != null) {
      this.selectedLeague.continental.continentalFirstDivision.amount.forEach((position: number) => {
        this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, LegendType.ContinentalFirstDivision);
      });
    }
  }
  public setContinentalQualifiersPositions() {
    if (this.selectedLeague.continental.continentalQualifiers != null) {
      this.selectedLeague.continental.continentalQualifiers.amount.forEach((position: number) => {
        this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, LegendType.ContinentalQualifiers);
      });
    }
  }

  public setContinentalSecondDivisionPositions() {
    if (this.selectedLeague.continental.continentalSecondDivision != null) {
      this.selectedLeague.continental.continentalSecondDivision.amount.forEach((position: number) => {
        this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, LegendType.ContinentalSecondDivision);
      });
    }
  }

  public setContinentalThirdDivisionPositions() {
    if (this.selectedLeague.continental.continentalThirdDivision != null) {
      this.selectedLeague.continental.continentalThirdDivision.amount.forEach((position: number) => {
        this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, LegendType.ContinentalThirdDivision);
      });
    }
  }

  public styleRowTable(row: any, lastRow: any, type: LegendType) {
    if (row != null && lastRow != null) {
      if (type === LegendType.Relegated) {
        row.style.backgroundImage = "url('https://www.colorhexa.com/EA4335.png')";
      } else if (type === LegendType.ContinentalFirstDivision) {
        row.style.backgroundImage = "url('https://www.colorhexa.com/4285f4.png')";
      } else if (type === LegendType.ContinentalQualifiers) {
        row.style.backgroundImage = "url('https://www.colorhexa.com/fa7b17.png')";
      } else if (type === LegendType.ContinentalSecondDivision) {
        row.style.backgroundImage = "url('https://www.colorhexa.com/34A853.png')";
      } else if (type === LegendType.ContinentalThirdDivision) {
        row.style.backgroundImage = "url('https://www.colorhexa.com/24C1E0.png')";
      } else {
        row.style.backgroundImage = "url('https://www.colorhexa.com/FBBC04.png')";
      }
      row.style.backgroundRepeat = "no-repeat"
      row.style.backgroundSize = "2.5px 98%"
      lastRow.style.backgroundSize = "2.5px 100%";
    }
  }

  private setColorPositionInRow() {
    this.setRelegatedPositions();
    this.setRelegatedQualifierPositions();
    this.setContinentalFirstDivisionPositions();
    this.setContinentalSecondDivisionPositions();
    this.setContinentalQualifiersPositions();
    this.setContinentalThirdDivisionPositions();
  }
}
