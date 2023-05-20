import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LocationModule } from './location/location.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, LocationModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
