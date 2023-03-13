import { Component, Input } from '@angular/core';
import { ITransaction } from 'src/app/Transaction';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() transactions: ITransaction[] = []
  displayedColumns: string[] = ['ID', 'Platform_ID', 'Value', 'Date'];

}
