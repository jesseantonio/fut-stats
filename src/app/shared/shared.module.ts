import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { ToastModule } from './components/toast/toast.module';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [FooterModule, HeaderModule, ToastModule, SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterModule, HeaderModule, ToastModule]
})
export class SharedModule { }
