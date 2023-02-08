import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ViewComponent } from './view/view.component';
import { TeamRoutingModule } from './team-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [TableComponent, ViewComponent, DropdownComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatCardModule,
    MatTableModule
  ],
})
export class TeamModule {}
