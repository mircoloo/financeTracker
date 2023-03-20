import { Component, OnInit, Input } from '@angular/core';
import { ITransaction } from 'src/app/Transaction';
import { Chart, registerables } from 'chart.js';
import { DateService } from 'src/app/services/date.service';

Chart.register(...registerables)


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  
  constructor(private dateService: DateService){}

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
      this.transactionsValue.push(transaction.value)
      this.currentTotalValue += transaction.value; 
      this.yValues.push(this.currentTotalValue) 
      //const date: Date = new Date(+transaction.Date);
      this.dates.push(this.dateService.timestampToDate(transaction.date));
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