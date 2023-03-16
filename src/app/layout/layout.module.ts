import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { BodyComponent } from './body/body.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ViewComponent, BodyComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatCardModule,
    MatTableModule,
    FooterModule,
    HeaderModule,
    SpinnerModule
  ],
})
export class LayoutModule {}
