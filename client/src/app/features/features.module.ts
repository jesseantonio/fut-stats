import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomeModule } from './home/home.module';
import { TeamModule } from './team/team.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TeamModule,
    HomeModule
  ],
  exports: [TeamModule, HomeModule]
})
export class FeaturesModule { }


