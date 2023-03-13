import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlatformService } from 'src/app/services/platform.service';
import { IPlatform } from 'src/app/Platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  public platforms: IPlatform[] = [];

  constructor(private platformService: PlatformService) { }
  ngOnInit(): void {
    this.platformService.getPlatforms()
        .subscribe(data => this.platforms = data)
  }
ngOnChanges(): void{
  console.log(this.platforms)
}
  
  
         



}
