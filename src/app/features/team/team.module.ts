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
import { TableCaptionComponent } from './table-caption/table-caption.component';
import { ToastModule } from 'src/app/shared/components/toast/toast.module';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [TableComponent, ViewComponent, DropdownComponent, TableCaptionComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatCardModule,
    MatTableModule,
    FooterModule,
    HeaderModule,
    ToastModule,
    SpinnerModule
  ],
})
export class TeamModule {}
