import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from '../../app/app-routing.module';
import { AppComponent } from '../app/app.component';

import { HeaderComponent } from '../../app/components/header/header.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { FooterComponent } from '../../app/components/footer/footer.component';
import { SidebarComponent } from '../../app/components/sidebar/sidebar.component';
import { LoginComponent } from '../../app/pages/login/login.component';
import { TopComponent } from '../../app/pages/top/top.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../../app/pages/register/register.component';
import { DialogsComponent } from 'src/app/pages/dialogs/dialogs.component';
import { VideoComponent } from 'src/app/pages/dialogs/components/video/video.component';
import { VideoService } from 'src/app/pages/dialogs/components/video/video.service';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";
import { LineChartComponent } from 'src/app/pages/dialogs/components/line-chart/line-chart.component';
import { DialogsService } from 'src/app/pages/dialogs/dialogs.service';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    TopComponent,
    RegisterComponent,
    DialogsComponent,
    VideoComponent,
    LineChartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgApexchartsModule,
    // FlexLayoutModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    VideoService,
    DialogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
