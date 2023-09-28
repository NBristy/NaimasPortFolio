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
import { GalleryComponent } from '../../app/pages/gallery/gallery.component';
import { LandingPageComponent } from '../../app/pages/templates/container/landing-page/landing-page.component';
import { LpHeaderComponent } from '../../app/pages/templates/container/landing-page/components/lp-header/lp-header.component';
import { LpFooterComponent } from '../../app/pages/templates/container/landing-page/components/lp-footer/lp-footer.component';
import { LpNavComponent } from '../../app/pages/templates/container/landing-page/components/lp-nav/lp-nav.component';
import { LpServiceComponent } from '../../app/pages/templates/container/landing-page/components/lp-service/lp-service.component';
import { LpAboutComponent } from '../../app/pages/templates/container/landing-page/components/lp-about/lp-about.component';
import { LpCardComponent } from '../../app/pages/templates/container/landing-page/components/lp-card/lp-card.component';
import { LpBlogComponent } from '../../app/pages/templates/container/landing-page/components/lp-blog/lp-blog.component';
import { LpCommentsComponent } from '../../app/pages/templates/container/landing-page/components/lp-comments/lp-comments.component';

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
    LineChartComponent,
    GalleryComponent,
    LandingPageComponent,
    LpHeaderComponent,
    LpFooterComponent,
    LpNavComponent,
    LpServiceComponent,
    LpAboutComponent,
    LpCardComponent,
    LpBlogComponent,
    LpCommentsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgApexchartsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    VideoService,
    DialogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
