import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public timestampToDate(ts: string | number): string{
    const date: Date = new Date(+ts);
    return date.getDate() + "/"  + Number(date.getMonth()+1) + "/" + date.getFullYear();
  }
}
