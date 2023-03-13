import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/Transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-bondora',
  templateUrl: './bondora.component.html',
  styleUrls: ['./bondora.component.css']
})
export class BondoraComponent implements OnInit{


  public transactions: ITransaction[] = [];


  constructor(private transactionService: TransactionService){

  }
  ngOnInit(): void {

    this.transactionService.getTransactions(2)
      .subscribe( data => this.transactions = data )

  }
}
