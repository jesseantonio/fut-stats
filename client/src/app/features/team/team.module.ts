import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './view/view.component';
import { TeamRoutingModule } from './team-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [CardComponent, ViewComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatCardModule,
    MatTableModule
  ],
})
export class TeamModule {}
