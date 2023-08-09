import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClaimstatusComponent } from './claimstatus/claimstatus.component';
import { ClaimdetailsComponent } from './claimdetails/claimdetails.component';

const appRoutes: Routes = [
  //{ path: '', component: AppComponent },
  { path: '', component: ClaimstatusComponent },
  { path: 'claimdetails', component: ClaimdetailsComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, ClaimdetailsComponent, ClaimstatusComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  title = 'Test Angular';
}

platformBrowser().bootstrapModule(AppModule);
