import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {Router} from '@angular/router';

@Component({
    selector: 'app-health-pie-chart',
    templateUrl: './device-health-pie-chart.component.html',
    styleUrls: ['./device-health-pie-chart.component.scss']
})
export class DeviceHealthPieChartComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('pieChart', {static: false}) pieChartEl: ElementRef;
    @Input() data: any;
    @Input() isDevicesLoading: any;
    private chart: any;

    constructor(public _route: Router) {
    }


    ngOnChanges(change) {;
        if (change.data && change.data.currentValue) {
            if (this.chart) {
                // redraw chart
                this.chart.series[0].setData(change.data.currentValue, true);
            }
        }
        if(change && change.isDevicesLoading.previousValue !== change.isDevicesLoading.currentValue) {
          this.isDevicesLoading = change.isDevicesLoading.currentValue
        }
    }

    ngOnInit() {
    }

  ngAfterViewInit() {
    const self = this;
    const opts: any = {
      title: {
        text: '',
      },
      tooltip: {
        formatter: function () {
          return this.point.name + ' (' + Highcharts.numberFormat(this.percentage, 2) + '%)';
        }
      },
      plotOptions: {
        series: {
          states: {
            inactive: {
              opacity: 1
            }
          },
        },
        pie: {
          dataLabels: {
            connectorWidth: 1,
            connectorShape: 'crookedLine',
            crookDistance: '70%',
            connectorColor: 'black',
            distance: 12,
            enabled: true,
            useHTML: true,
            style: {
              fontWeight: 'normal'
            },
            formatter: function () {
              if (this.y !== 0) {
                  return '<b class="mr-1">' + Highcharts.numberFormat(this.percentage, 2) + '%</b>' + this.point.name;
              }
            }
          },
          innerSize: '50%',
          size: '100%',
          borderWidth: 0
        }
      },
      credits: {
        enabled: false,
      },
      series: [{
        data: this.data,
      }]
    };
    if (this.pieChartEl && this.pieChartEl.nativeElement) {
      opts.chart = {
        type: 'pie',
        renderTo: this.pieChartEl.nativeElement,
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
      };

      this.chart = new Highcharts.Chart(opts);
    }
  }
}

