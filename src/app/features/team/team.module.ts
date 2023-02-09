import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';
import { TeamRoutingModule } from './team-routing.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TableComponent, ViewComponent, DropdownComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatCardModule,
    MatTableModule,
    FooterModule,
    HeaderModule
  ],
})
export class TeamModule {}
