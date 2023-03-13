import { Component, OnInit } from '@angular/core';
import { IPlatform } from 'src/app/Platform';
import { ITransaction } from 'src/app/Transaction';
import { PlatformService } from 'src/app/services/platform.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-degiro',
  templateUrl: './degiro.component.html',
  styleUrls: ['./degiro.component.css']
})
export class DegiroComponent implements OnInit {

  public transactions: ITransaction[] = [];
  public platform: IPlatform = {ID: -1, Name: "", TotalValue: 0}

  constructor(private transactionService: TransactionService, private platformService: PlatformService){

  }
  ngOnInit(): void {

    

          this.platformService.getPlatform(1)
      .subscribe( (data: IPlatform) => 
          {
           
            this.platform = data
            console.log("Platform",this.platform) 
          })

    
     

    this.transactionService.getTransactions(1)
      .subscribe( (data) => {this.transactions = data; console.log(this.transactions) }) 

  }


}
