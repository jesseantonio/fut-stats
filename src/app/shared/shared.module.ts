import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';



@NgModule({
  declarations: [FooterModule, HeaderModule],
  imports: [
    CommonModule
  ],
  exports: [FooterModule, HeaderModule]
})
export class SharedModule { }
