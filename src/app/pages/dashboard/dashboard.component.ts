import { element } from 'protractor';
import { Component, OnInit,NgZone } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource: any;
  chartConfig: Object;
  PiedataSource: any;
  selectedSlice = 'none';
  chart: any;
  highestShare:any
  lowestShare:any
  highestReserves:any
  lowestReserves:any
  constructor(private zone: NgZone) {
    this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
      color:'#164081'
  }
  this.dataSource = {
    "chart": {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "fusion",
    },
    "data": [{
      "label": "Venezuela",
      "value": "290"
    }, {
      "label": "Saudi",
      "value": "260"
    }, {
      "label": "Canada",
      "value": "180"
    }, {
      "label": "Iran",
      "value": "140"
    }, {
      "label": "Russia",
      "value": "115"
    }, {
      "label": "UAE",
      "value": "100"
    }, {
      "label": "US",
      "value": "30"
    }, {
      "label": "China",
      "value": "30"
    }]
  };
  let totalReserves =[]
  for(let i=0;i<this.dataSource.data.length;i++){
    totalReserves.push(this.dataSource.data[i].value)
  }
  this.lowestReserves = totalReserves.reduce((a, b) => Math.max(a, b));  // 5

  this.highestReserves = totalReserves.reduce((a, b) => Math.min(a, b));  // 1
  console.log(totalReserves);

  this.PiedataSource = {
    "chart": {
        "caption": "Market Share of Web Servers",
        "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
        "showLegend": "1",
        "showPercentValues": "1",
        "legendPosition": "bottom",
        "useDataPlotColorForLabels": "1",
        "enablemultislicing": "0",
        "showlegend": "0",
        "theme": "fusion",
    },
    "data": [{
        "label": "Apache",
        "value": "32647479"
    }, {
        "label": "Microsoft",
        "value": "22100932"
    }, {
        "label": "Zeus",
        "value": "1437600"
    }, {
        "label": "Other",
        "value": "18674221"
    }]
  };
let totalShare =[]
for(let i=0;i<this.PiedataSource.data.length;i++){
  totalShare.push(this.PiedataSource.data[i].value)
}
this.highestShare = totalShare.reduce((a, b) => Math.max(a, b));  // 5

this.lowestShare = totalShare.reduce((a, b) => Math.min(a, b));  // 1
console.log(totalShare);

}

// FusionCharts initialized listener to get the chart instance
initialized($event){
  this.chart = $event.chart; // saving chart instance
}

// Change listener for radio buttons
onRadioOptionChange(option){
  this.selectedSlice = option;
  // For each data element , see if it is selected, if none then slice in all elements
  this.PiedataSource.data.forEach((d, index) => {
    if(option == 'none'){
      this.chart.slicePlotItem(index, false);
    } else if(option === d.label.toLowerCase()){
      this.chart.slicePlotItem(index, true);
    }
  });
}

// Get data item label
getLabel(index){
  return this.PiedataSource.data[index].label;
}

// FusionCharts Component dataPlot click listener
dataplotClick($event){
  let dataIndex = $event.dataObj.dataIndex;
  let isSliced = $event.dataObj.isSliced;
  this.zone.run(() => {
    this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
  })


}

  ngOnInit(): void {

  }


}
