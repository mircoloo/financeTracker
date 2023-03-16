import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  
  @Input() platformID!: number;
  transactionValue: string = ""
  isValidInput: boolean = true
  

  constructor(private transactionServie: TransactionService){}

  ngOnInit(): void {
    
    

  }

  public onInput(event: Event){
    this.checkInput((<HTMLInputElement>event.target).value)
  }

  private checkInput(input: string){

    console.log(Number(input), typeof(Number(input)))

    if (Number.isNaN(Number(input))){
      this.isValidInput = false
    } else{
      this.isValidInput = true
    }

  }
  
  onClick(){
    this.transactionServie.addTransaction(this.platformID, Number(this.transactionValue), String(Date.now()))
      .subscribe()
  }

}
