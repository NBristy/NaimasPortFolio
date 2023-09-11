import { Component, Inject, OnInit, ViewChild } from '@angular/core';
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
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip
};

@Component({
  selector: 'app-dialogs-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class TopComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public scope = {
    wait : true,
    camNo : 0,
    cameraHost : '',
    csvData : null,
    category : null,
    cameraInfo : null,
    seriesData : null,
    highestY : null
  }

  constructor(
    private title: Title,
    @Inject(MAT_DIALOG_DATA) public parameter: any,
  ) {
    this.title.setTitle('アナリティクス');
    this.scope.cameraInfo = parameter.camera;
      this.scope.csvData = parameter.csvData;
      this.scope.seriesData = parameter.seriesData;
      this.scope.highestY = parameter.highestY;
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
          text: `Camera ${this.scope.camNo}: ${this.scope.cameraHost}`,
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
          max: this.scope.highestY,
          title: {
            text: "Detect Count"
          }
        }
      };
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.scope.wait = false;
      this.chart.updateOptions({
        series: this.scope.seriesData,
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
        legend: {
          showForSingleSeries: true,
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -10,
          offsetX: -5
        }
      })
    }, 2000);
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

}
