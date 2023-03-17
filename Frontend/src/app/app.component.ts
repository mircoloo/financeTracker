import { Component, OnInit } from '@angular/core';
import { PlatformService } from './services/platform.service';
import { IPlatform } from './Platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private platformServie: PlatformService){}
  

  title = 'financeTracker';
  public opened: boolean = false
  testo: string = "";
  platforms!: IPlatform[];
  
  ngOnInit(): void {
    
    this.platformServie.getPlatforms()
    .subscribe( (platforms) => this.platforms = platforms)

    
  }


  onInput(e: Event){
    console.log((<HTMLInputElement>e.target).value)
    this.testo = (<HTMLInputElement>e.target).value
  }





}
