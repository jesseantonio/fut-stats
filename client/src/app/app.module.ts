import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabelaComponent } from './features/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent

  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
