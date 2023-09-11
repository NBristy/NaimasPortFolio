import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VideoComponent } from './components/video/video.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogsService } from './dialogs.service';

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

  public fetchCsvData() {
    this.service.getCsvData().subscribe((res:any) => {
      this.scope.csvData = res;
    });
  }

}
