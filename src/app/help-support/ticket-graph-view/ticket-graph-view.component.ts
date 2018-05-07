import { Component, OnInit,Input } from '@angular/core';
import { CHARTCONFIG } from '../../charts/charts.config';
@Component({
  selector: 'ticket-graph-view',
  templateUrl: './ticket-graph-view.component.html',
  styleUrls: ['./ticket-graph-view.component.scss']
})
export class TicketGraphViewComponent implements OnInit {
  config = CHARTCONFIG;
  @Input() ageingParams: any;
  
  bar1 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Total Tickets(SLA)', 'Resolved'],
      textStyle: {
        color: this.config.textColor
      }
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true, title: 'save' }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['Delhi', 'Mumbai', 'Kolkata', 'Pune', 'Noida', 'Total'],
        axisLabel: {
          textStyle: {
            color: this.config.textColor
          }
        },
        splitLine: {
          lineStyle: {
            color: this.config.splitLineColor
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: this.config.textColor
          }
        },
        splitLine: {
          lineStyle: {
            color: this.config.splitLineColor
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: this.config.splitAreaColor
          }
        }
      }
    ],
    series: [
      {
        name: 'Total Tickets(SLA)',
        type: 'bar',
        data: [15, 20, 22, 23, 34, 114],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: 'Average' }
          ]
        }
      },
      {
        name: 'Resolved',
        type: 'bar',
        data: [2, 3, 4, 5, 7, 21],
        // markPoint: {
        //   data: [
        //     { name: 'Highest', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
        //     { name: 'Lowest', value: 2.3, xAxis: 11, yAxis: 3 }
        //   ]
        // },
        // markLine: {
        //   data: [
        //     { type: 'average', name: 'Average' }
        //   ]
        // }
      }
    ]
  };

  bar2 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Total'],
      textStyle: {
        color: this.config.textColor
      }
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true, title: 'save' }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['Total', 'New', 'Inprogress', 'N.A', 'OnHold', 'Resolved'],
        axisLabel: {
          textStyle: {
            color: this.config.textColor
          }
        },
        splitLine: {
          lineStyle: {
            color: this.config.splitLineColor
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: this.config.textColor
          }
        },
        splitLine: {
          lineStyle: {
            color: this.config.splitLineColor
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: this.config.splitAreaColor
          }
        }
      }
    ],
    series: [
      {
        name: 'Total',
        type: 'bar',
        data: [114, 25, 24, 21, 23, 21],

      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}