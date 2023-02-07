import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { TeamModule } from './team/team.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TeamModule,
  ],
  exports: [TeamModule]
})
export class FeaturesModule { }


