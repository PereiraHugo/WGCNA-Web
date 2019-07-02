import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTabsModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule } from '@angular/material';
import { GlobalTabsComponent } from './global-tabs/global-tabs.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { FormTabComponent } from './form-tab/form-tab.component';
import { ResultTabComponent } from './result-tab/result-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalTabsComponent,
    HomeTabComponent,
    FormTabComponent,
    ResultTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
