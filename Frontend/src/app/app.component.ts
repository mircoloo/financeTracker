import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'financeTracker';
  public opened: boolean = true


  onInput(e: Event){
    console.log((<HTMLInputElement>e.target).value)
  }



}
