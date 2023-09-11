import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { AnalyticsService } from '../../app/common/service/AnalyticsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'frontend';
  constructor(
    // private analyticsService :  AnalyticsService
  ) {
  }
  // componentDidMount() {
  //   this.analyticsService.trackPageViews();
  // }
  public ngAfterViewInit(): void {
  }
}