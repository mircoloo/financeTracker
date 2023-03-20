import { Component, Input } from '@angular/core';
import { ITransaction } from 'src/app/Transaction';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private dateService: DateService){}

  @Input() transactions: ITransaction[] = []
  displayedColumns: string[] = ['ID', 'Platform_ID', 'Value', 'Date'];


  timestampToDate(timestamp: string){
      
      
      if( +timestamp != 0 ){
        return this.dateService.timestampToDate(timestamp)
      }
      return ""
      
    

    
    

  }

}
