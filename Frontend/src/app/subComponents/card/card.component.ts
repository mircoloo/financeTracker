import { Component, Input } from '@angular/core';
import { IPlatform } from 'src/app/Platform';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() platform!: IPlatform;
  showInput: boolean = true
  

  public onClick(event: any){
   

  }

  


}
