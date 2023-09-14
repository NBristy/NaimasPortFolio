import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { VideoService } from './video.service';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-dialogs-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

export class VideoComponent implements OnInit {
  public videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  @ViewChild('videoPlayer') 
  public videoPlayer!: ElementRef;
  @ViewChild('timelineContainer') 
  public timelineContainer!: ElementRef;
  @ViewChild(MatSort) 
  public sort: MatSort | undefined;
  public markerTimes: number[] = [];
  public timelineTimestamps: number[] = [];
  public timelineLength: number | undefined;
  public dataSource: any;
  public dataLength = 0;
  public totalDataLength = 0;
  public scope = {
    wait : true,
    eData : null,
    operationId : null,
    vData : null,
    lineName : null,
    processName : null,
    progressWidth : 0,
    currentTime : 0,
    startTime : '',

    start_date: new Date(),
    user_name: "Video Maker",
  }

  public displayedColumns = [
    'position', 'name', 'start_datetime', 'end_datetime', 'symbol'
  ];

  constructor(
    public service: VideoService,
    private matDialogRef: MatDialogRef<VideoComponent>,
  ) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.generateTimelineTimestamps();
    this.generateMarkers(ELEMENT_DATA);
    this.scope.wait = false;
    // if (this.scope.operationId) {
    //   this.service.getVideoData().subscribe((res:any) => {
    //     console.log("data", res)
    //     if (res && Object.keys(res).length > 0) {
    //       this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    //       this.dataSource.sort = this.sort;
    //       this.totalDataLength = res.length;
    //       this.generateTimelineTimestamps();
    //       this.generateMarkers(res);
    //       this.scope.wait = false
    //     }
    //   });
    // }
  }

  public ngAfterViewInit() {
    this.videoPlayer.nativeElement.addEventListener('loadedmetadata', this.onVideoLoaded);
  }

  public onVideoLoaded = () => {
    if (this.videoPlayer && this.videoPlayer.nativeElement.duration > 12) {
      this.timelineLength = Math.floor(this.videoPlayer.nativeElement.duration) * 10;
    }
  };

  public onClose() {
    this.matDialogRef.close({ status: 'SUCCESS' });
  }

  public onTimeUpdate()  {
    if (this.videoPlayer && this.videoPlayer.nativeElement.duration) {
      this.scope.progressWidth = ((this.videoPlayer.nativeElement.currentTime / this.videoPlayer.nativeElement.duration) * 100);
      this.scope.currentTime = this.videoPlayer.nativeElement.currentTime;
    }
  }

  public calculateMarkerPosition(markerTime: number): number {
    if (this.videoPlayer && this.videoPlayer.nativeElement.duration) {
      return (markerTime / this.videoPlayer.nativeElement.duration) * 100;
    }
    return 0;
  }

  public calculateTimelineWidth() {
    if (this.videoPlayer && this.videoPlayer.nativeElement.duration > 12) {
      return Math.floor(this.videoPlayer.nativeElement.duration) * 10;
    } else {
      return null
    }
  }

  public generateTimelineTimestamps(): void {
    if (this.videoPlayer && this.videoPlayer.nativeElement.duration) {
      const videoDuration = this.videoPlayer.nativeElement.duration;
      for (let i = 0; i <= videoDuration; i++) {
        this.timelineTimestamps.push(i);
      }
    }
  }

  public generateMarkers(data: any): void {
    // this.scope.startTime = data[0].start_datetime.split("T")[1];
    this.scope.startTime = data[0].start_datetime;
    const startTimeInSec = this.timeToSeconds(this.scope.startTime);
    this.markerTimes = [0];
    for (let i = 1; i < data.length; i++) {
      // const item = data[i].start_datetime.split("T")[1];
      const item = data[i].start_datetime;
      const itemInSec = this.timeToSeconds(item);
      const diff = itemInSec - startTimeInSec;
      this.markerTimes.push(diff);
    }
  }

  public seekToTime(time: number): void {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.currentTime = time;
      this.videoPlayer.nativeElement.play();
    }
  }

  public goToMark(date: any): void {
    // const time = date.split("T")[1];
    const time = date;
    console.log("time", time)
    console.log("this.scope.startTime", this.scope.startTime)
    const timeInSec = this.timeToSeconds(time) - this.timeToSeconds(this.scope.startTime);
    this.scrollToTime(timeInSec);
    this.seekToTime(timeInSec);
  }

  public scrollToTime(time: any): void {
    const timestampElement = this.timelineContainer.nativeElement.querySelector(`[data-seconds="${time}"]`);
    if (timestampElement) {
      const targetScrollLeft = timestampElement.offsetLeft - this.timelineContainer.nativeElement.clientWidth / 2;
      this.timelineContainer.nativeElement.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
    }
  }

  public getFormattedTimestamp(timeInSeconds : number): string {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  public formatTime(timestamp: number): string {
    const start = this.scope.startTime.split(":");
    const hours = Math.floor(timestamp / 3600) + parseInt(start[0]);
    const minutes = Math.floor((timestamp % 3600) / 60) + parseInt(start[1]);
    const seconds = Math.floor(timestamp % 60) + parseInt(start[2]);
    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  public padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  public timeToSeconds(timeString: string) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return totalSeconds;
  }
  
  public sortData(sortState: Sort) {
    this.dataSource.sort = this.sort;
  }

}

export interface TableElement {
  name: string;
  position: number;
  start_datetime: string;
  end_datetime: string;
  symbol: string
}

const ELEMENT_DATA: TableElement[] = [
  {position: 1, name: 'Work start', start_datetime: "10:00:05", end_datetime: "10:00:08", symbol: 'H'},
  {position: 2, name: 'Process start', start_datetime: "10:00:08", end_datetime: "10:00:10", symbol: 'He'},
  {position: 3, name: 'Working', start_datetime: "10:00:10", end_datetime: "10:00:15", symbol: 'Li'},
  {position: 4, name: 'Changing Process', start_datetime: "10:00:15", end_datetime: "10:00:20", symbol: 'Be'},
  {position: 5, name: 'Next Phase', start_datetime: "10:00:20", end_datetime: "10:00:25", symbol: 'B'},
  {position: 6, name: 'Working', start_datetime: "10:00:25", end_datetime: "10:00:30", symbol: 'C'},
  {position: 7, name: 'Changing to 3rd Step', start_datetime: "10:00:30", end_datetime: "10:00:35", symbol: 'N'},
  {position: 8, name: 'Working', start_datetime: "10:00:35", end_datetime: "10:00:40", symbol: 'O'},
  {position: 9, name: 'Checking', start_datetime: "10:00:40", end_datetime: "10:00:45", symbol: 'F'},
  {position: 10, name: 'Work Done', start_datetime: "10:00:45", end_datetime: "10:00:55", symbol: 'Ne'},
];
