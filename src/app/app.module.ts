import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderModule } from './shared/components/header/header.module';
import { SpinnerModule } from './shared/components/spinner/spinner.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    FeaturesModule,
    CoreModule,
    BrowserAnimationsModule,
    FooterModule,
    HeaderModule,
    SpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
