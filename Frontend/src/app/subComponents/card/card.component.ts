import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPlatform } from 'src/app/Platform';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  

  @Input() platform!: IPlatform;
  showInput: boolean = true
  

  public onClick(event: any){
   

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }


  


}
