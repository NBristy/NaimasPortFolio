import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VideoComponent } from './components/video/video.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DialogsService } from './dialogs.service';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {
  public scope = {
    showSpinner: false,
    csvData: null
  }

  constructor(
    private dialog: MatDialog,
    private service: DialogsService
  ) {
  }

  ngOnInit(): void {
    this.fetchCsvData()
  }

  public render() {}

  public openVideoDialog() {
    const dialogRef = this.dialog.open(VideoComponent, {
      width: '70%',
      disableClose: true,
      data: {
        
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.status == 'SUCCESS') {
        this.render();
      }
    });
  }

  public openChartDialog() {
    const dialogRef = this.dialog.open(LineChartComponent, {
      width: '70%',
      disableClose: true,
      data: {
        csvData: this.scope.csvData
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.status == 'SUCCESS') {
        this.render();
      }
    });
  }

  public fetchCsvData() {
    this.service.getCsvData().subscribe((res:any) => {
      this.scope.csvData = res;
      console.log(res)
    });
  }

}
