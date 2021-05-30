import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType} from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public pieChartLabels: Label[] = [['Miguel de cervantes '], ['Charies Dickens '], ['J.R.R Tolklen'],['Antoine de Saint-Exuper']];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  result: any = [];

  constructor() {
    this.result = JSON.parse(localStorage.getItem('data') || '{}');
  
   }

  ngOnInit(): void {
    var maxRes = Math.max.apply(Math, this.result.map((res: any) =>  res.count))
    console.log(maxRes)
    this.result.forEach((element: any) => {
      this.pieChartData.push(element.count)
       if(element.count == maxRes) {
          element.bgColor = '#ff9999';
       } else {
         element.bgColor = '#ffffff';
       }
    });
    console.log(this.pieChartData);
    
  }

}
