import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';

@NgModule({
  declarations: [ViewComponent, BodyComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatCardModule,
    MatTableModule,
    FooterModule,
    HeaderModule
  ],
})
export class LayoutModule {}
