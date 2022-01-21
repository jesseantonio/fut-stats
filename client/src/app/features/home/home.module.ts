import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [ViewComponent, BodyComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatTableModule
  ],
})
export class HomeModule {}
