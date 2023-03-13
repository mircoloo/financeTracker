import { Component, Input } from '@angular/core';
import { IPlatform } from 'src/app/Platform';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() platform: IPlatform = {ID: -1, Name: "", TotalValue: 0};
  showInput: boolean = true
  transValue: string = ""
  isValidInput: boolean = true

  public onClick(event: any){
    console.log(this.transValue)

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


}
