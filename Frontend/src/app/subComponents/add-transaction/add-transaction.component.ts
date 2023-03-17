import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  
  @Input() platformID!: number;
  transactionValue: string = ""
  isValidInput: boolean = true
  transactionDate!: Date;
  //date = new Date((new Date().getTime() - 3888000000));

  constructor(private transactionServie: TransactionService, private snackBar: MatSnackBar){}

  ngOnInit(): void {
  
  }

  

  private checkInput(input: string){

    console.log(input, typeof(input),Number.isNaN(Number(input)))

    if (Number.isNaN(Number(input))){
      this.isValidInput = false
    } else{
      this.isValidInput = true
    }

  }

  public onInput(event: Event){
    this.checkInput((<HTMLInputElement>event.target).value)
  }

  openSnackBar(message: string, action:string){
    let snackBarRef = this.snackBar.open(message, action);
    snackBarRef.afterDismissed().subscribe(() => {
      console.log("The snackbar was dismissed")

    })
    
  }
  
  onClick(){
    console.log(this.transactionDate.getTime(), typeof(this.transactionDate))

    this.transactionServie.addTransaction(this.platformID, Number(this.transactionValue), String(this.transactionDate.getTime()))
      .subscribe()

      this.openSnackBar("Aggiunsta transazione", "Cancel");
      

  
  }

}
