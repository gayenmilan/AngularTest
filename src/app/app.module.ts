import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { AppMaterialModule } from './app.material.module';
import { MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, AppMaterialModule, MatIconModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  title = 'Test Angular';
}

platformBrowser().bootstrapModule(AppModule);
