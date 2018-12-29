import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';


import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EcommerceComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
