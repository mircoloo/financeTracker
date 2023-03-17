import { Component, OnInit, Input } from '@angular/core';
import { ITransaction } from 'src/app/Transaction';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  
  @Input() transactions!: ITransaction[];
  @Input() platformID!: number;
   chart!: Chart;


  canvasID = "canvas" + this.platformID
  dates: string[] = [];
  yValues: number[] = [];
  transactionsValue: number[] = [];
  currentTotalValue: number = 0; 


  ngOnInit(): void {

    console.log("CHART TRANSACTIONS:" + this.transactions)
    this.transactions.map( (transaction) => { 
      this.transactionsValue.push(transaction.Value)
      this.currentTotalValue += transaction.Value; 
      this.yValues.push(this.currentTotalValue) 
      this.dates.push(transaction.Date); 
    } )
      

    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: this.dates,
        datasets: [
          {
            label: "Total Value",
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
            data: this.yValues
          },
          {
            label: "Transactions",
            backgroundColor: 'green',
            borderColor: 'green',
            fill: false,
            data: this.transactionsValue
          }
        ]
      },
      options:{}
    });
  }
}