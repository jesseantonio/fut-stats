import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { ToastModule } from '../shared/components/toast/toast.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { TeamModule } from './team/team.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TeamModule,
    FooterModule,
    HeaderModule,
    ToastModule,
    SpinnerModule
  ],
  exports: [TeamModule]
})
export class FeaturesModule { }


