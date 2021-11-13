import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageLayoutComponent } from './Layout/page-layout/page-layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageLayoutComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    EmployeesComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FusionChartsModule,
    MaterialModule,
    // HttpClient,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
