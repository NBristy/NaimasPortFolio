import { Component, Inject, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip
} from "ng-apexcharts";
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-dialogs-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public seriesData: any;
  public scope = {
    wait : true,
    camNo : 0,
    cameraHost : '',
    csvData : [],
    category : null,
    cameraInfo : null,
    seriesData : null,
    overlay : false,
    highestY : 0
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public parameter: any,
    private matDialogRef: MatDialogRef<LineChartComponent>,
  ) {
    this.scope.csvData = parameter.csvData;
    this.chartOptions = {
      series: [],
      chart: {
        height: 500,
        type: 'line',
        offsetY: 10,
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: true
        },
        animations: {
          enabled: false
        }
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Detection graph",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false,
          format: 'dd MMM yyyy HH:mm:ss'
        },
        title: {
          text: "Date & Time"
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        title: {
          text: "Detect Count"
        }
      }
    };
  }

  ngOnInit(): void {
    this.render();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['csvData']) {
      this.render();
    }
  }

  public render() {
    this.scope.highestY = 0;
    const chartSeries = [];
    if (this.scope.csvData && this.scope.csvData.length > 0) {
      const camCsv: any = this.scope.csvData;
      this.scope.overlay = false;
      const categories = [...new Set(camCsv.map((item:any) => item.detect_label))];
      const timestamps = this.getTimestampsInRange(camCsv[0].alert_date, camCsv[camCsv.length - 1].alert_date);
      for (let i = 0; i < categories.length; i++) {
        const element = {
          name: categories[i],
          data: JSON.parse(JSON.stringify(timestamps))
        };
        chartSeries.push(element);
      }
      for (let i = 0; i < camCsv.length; i++) {
        const formattedTime = new Date(camCsv[i].alert_date).getTime();
        const nameId = chartSeries.findIndex((e:any)=> e.name == camCsv[i].detect_label);
        const dataId = this.positionBinarySearch(chartSeries[nameId].data, formattedTime);
        chartSeries[nameId].data[dataId][1] = camCsv[i].count;
        if (camCsv[i].count > this.scope.highestY) {
          this.scope.highestY = parseInt(camCsv[i].count);
        }
      }
      this.seriesData = chartSeries;
      this.scope.csvData = camCsv;
      this.scope.highestY += 1;
    }
    setTimeout(() => {
      this.scope.wait = false;
      this.chartUpdate(this.seriesData)
    }, 2000);
  }

  public chartUpdate(data: any) {
    this.scope.wait = false;
    this.chart.updateOptions({
      series: data,
      dataLabels: {
        enabled: true,
        formatter: function (val: number, opts: any) {
          if (val === 0) {
            return '';
          }
          return val;
        }
      },
      markers: {
        size: 0
      },
      tooltip: {
        x: {
          show: true,
          format: 'dd MMM yyyy HH:mm:ss',
        }
      },
      yaxis: {
        min: 0,
        max: this.scope.highestY,
        title: {
          text: "Detect Count"
        }
      },
      legend: {
        showForSingleSeries: true,
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -10,
        offsetX: -5
      }
    })
  }

  public onClose() {
    this.matDialogRef.close({ status: 'SUCCESS' });
  }

  public downloadCSV() {
    const csvData = this.convertToCSV(this.scope.csvData); // Convert series data to CSV format
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' }); // Create a Blob with the CSV data
    const csvUrl = URL.createObjectURL(blob); // Create a URL for the Blob
    const link = document.createElement('a');
    link.href = csvUrl;
    link.download = 'data.csv';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private convertToCSV(data: any): string {
    const csvRows: string[] = [];

    // Add header row
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    // Add data rows
    for (const series of data) {
      const rows = Object.values(series).join(',');
      csvRows.push(rows);
    }
    return csvRows.join('\n');
  }
  
  public getTimestampsInRange(startDateString: string, endDateString: string) {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    
    const timestamps = [];
    while (startDate <= endDate) {
      let temp = [];
      temp.push(startDate.getTime());
      temp.push(0)
      timestamps.push(temp);
      startDate.setSeconds(startDate.getSeconds() + 1);
    }
  
    return timestamps;
  }

  public positionBinarySearch(arr: any, target: any) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid][0] == target) {
        return mid;
      } else if (arr[mid][0] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }

}
