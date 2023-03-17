import { Component, OnInit, Input } from '@angular/core';
import { IPlatform } from 'src/app/Platform';
import { ITransaction } from 'src/app/Transaction';
import { PlatformService } from 'src/app/services/platform.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  @Input() platformID!: number; 
  platform!: IPlatform;
  transactions!: ITransaction[];

  constructor(private transactionService: TransactionService, private platformService: PlatformService){}


  ngOnInit(): void {

      this.platformService.getPlatform(this.platformID)
      .subscribe(  (platform: IPlatform) => 
          {
            this.platform = platform
          }
        )  

    this.transactionService.getTransactions(this.platformID)
      .subscribe( (data) => {this.transactions = data; console.log(this.transactions) }) 
  }
    
} 

  
